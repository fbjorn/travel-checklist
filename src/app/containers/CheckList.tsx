import * as React from 'react';
import { Button, Intent, ButtonGroup } from '@blueprintjs/core';
import { getSuggestedItems, Categories, Items } from '../../data/suggestedItems';
import update from 'immutability-helper';
import { SummaryView } from '../components/Summary/SummaryView';
import { StepIndicator } from '../components/Preview/StepIndicator';
import { CategoryViewer } from '../components/Preview/CategoryViewer';
import '../styles.scss';
import { withNamespaces } from 'react-i18next';
import { NamespacesConsumer } from 'react-i18next';
import i18n from '../i18n';

interface Props {}

interface State {
  currentIndex: number;
  categories: Categories;
  categoriesCount: number;
  showResultList: boolean;
}

@(withNamespaces(['translations']) as any)
export class CheckList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const categories = getSuggestedItems(i18n.language);
    const categoriesCount = Object.keys(categories).length;
    this.state = {
      currentIndex: 0,
      categories,
      categoriesCount,
      showResultList: false,
    };
  }

  onSuggestedItemSelected = (catId: string, itemId: string) => {
    const isSelected = this.state.categories[catId].items[itemId].selected;
    this.setState(
      update(this.state, {
        categories: {
          [catId]: { items: { [itemId]: { selected: { $set: !isSelected } } } },
        },
      }),
    );
  };

  onEntireCategorySelected = (catId: string, selected: boolean) => {
    const diff: Items = {};
    Object.entries(this.state.categories[catId].items).forEach(([itemId, item]) => {
      diff[itemId] = { selected, name: item.name };
    });
    this.setState(update(this.state, { categories: { [catId]: { items: { $set: diff } } } }));
  };

  showNextCategory = () => {
    if (this.state.currentIndex + 1 === this.state.categoriesCount) {
      this.setState({ showResultList: true });
    } else {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
  };

  onItemAdd = (catId: string, item: string) => {
    const newItemKey = `${catId}${item}`;
    const newItem = { name: item, selected: true };
    this.setState(
      update(this.state, {
        categories: { [catId]: { items: { [newItemKey]: { $set: newItem } } } },
      }),
    );
  };

  onItemRemove = (catId: string, itemId: string) => {
    this.setState(update(this.state, { categories: { [catId]: { items: { $unset: [itemId] } } } }));
  };

  skipPreview = () => {
    this.setState({ showResultList: true });
  };

  changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    this.setState({ categories: getSuggestedItems(lang, this.state.categories) });
  };

  render() {
    const category = this.state.categories[`${this.state.currentIndex}`];
    const categoryName = category.name;
    return (
      <NamespacesConsumer>
        {t => (
          <div>
            <header>
              <ButtonGroup className="language-buttons" minimal={true}>
                <Button small={true} onClick={() => this.changeLanguage('en')}>
                  🇬🇧
                </Button>
                <Button small={true} onClick={() => this.changeLanguage('ru')}>
                  🇷🇺
                </Button>
              </ButtonGroup>
            </header>
            {this.state.showResultList ? (
              <SummaryView
                categories={this.state.categories}
                onItemAdd={this.onItemAdd}
                onItemRemove={this.onItemRemove}
              />
            ) : (
              <div className="category-preview">
                <CategoryViewer
                  name={category.name}
                  key={category.name}
                  items={category.items}
                  catId={category.id}
                  color={category.color}
                  onSelect={this.onSuggestedItemSelected}
                  onSelectAll={this.onEntireCategorySelected}
                  onSkip={this.skipPreview}
                />
                <StepIndicator
                  step={this.state.currentIndex}
                  length={Object.values(this.state.categories).length}
                />
                <Button intent={Intent.PRIMARY} onClick={this.showNextCategory}>
                  {t('main.button.next')}
                </Button>
              </div>
            )}
          </div>
        )}
      </NamespacesConsumer>
    );
  }
}
