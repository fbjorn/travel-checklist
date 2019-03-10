import * as React from 'react';
import { CategoryBlock } from './CategoryBlock';
import { Button, Divider, Intent } from '@blueprintjs/core';
import Drawer from '../../../pdf';
import { Categories, Category } from '../../../data/suggestedItems';
import { CheckListCategory } from '../../../pdf/types';
import Masonry from 'react-masonry-component';
import { NamespacesConsumer, withNamespaces } from 'react-i18next';

interface Props {
  categories: Categories;
  onItemAdd: (catId: string, item: string) => void;
  onItemRemove: (catId: string, itemId: string) => void;
}

interface State {
  producingPDF: boolean;
}

@(withNamespaces(['translations']) as any)
export class SummaryView extends React.Component<Props, State> {
  state = {
    producingPDF: false,
  };

  printPDF = () => {
    const checkListData: CheckListCategory[] = [];
    console.log(this.props.categories);
    Object.values(this.props.categories).forEach(category => {
      const items = Object.values(category.items)
        .filter(item => item.selected)
        .map(item => item.name);
      if (items.length) {
        checkListData.push({
          items,
          name: category.name,
        });
      }
    });
    this.setState({ producingPDF: true });
    new Drawer('canvas', checkListData, 4).generatePDF().then(() => {
      this.setState({ producingPDF: false });
    });
  };

  render() {
    const categories = Object.entries(this.props.categories).map(([catId, category]) => (
      <CategoryBlock
        key={`svc${category.id}`}
        name={category.name}
        color={category.color}
        items={category.items}
        catId={catId}
        onItemAdd={this.props.onItemAdd}
        onItemRemove={this.props.onItemRemove}
      />
    ));
    const elem = document.querySelector('.summary__category-block');
    return (
      <NamespacesConsumer>
        {t => (
          <div>
            <div className="summary__header">
              <h1>{t('summary.view.header')}</h1>
              <p>{t('summary.view.description.info')}</p>
              <p>{t('summary.view.description.howtoremove')}</p>
              <p>{t('summary.view.description.popup')}</p>
              <Button
                onClick={this.printPDF}
                intent={Intent.SUCCESS}
                loading={this.state.producingPDF}
              >
                {t('summary.view.button.makepdf')}
              </Button>
            </div>
            <Divider />
            <Masonry className={'summary__categories'} options={{ gutter: 10 }}>
              {categories}
            </Masonry>
          </div>
        )}
      </NamespacesConsumer>
    );
  }
}
