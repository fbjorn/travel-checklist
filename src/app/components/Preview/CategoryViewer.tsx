import * as React from 'react';
import { Checkbox, Button, Icon, Intent, ButtonGroup, Divider } from '@blueprintjs/core';
import { Item, Category } from '../../../data/suggestedItems';
import { IconNames } from '@blueprintjs/icons';
import { withI18n, reactI18nextModule, NamespacesConsumer } from 'react-i18next';

interface Props {
  catId: string;
  name: string;
  color: string;
  items: { [key: string]: Item };
  onSelect: (catId: string, itemId: string) => void;
  onSelectAll: (catId: string, selected: boolean) => void;
  onSkip: () => void;
  t: (str: string) => string;
}

interface State {
  selectItemsToggle: boolean;
}

class CCategoryViewer extends React.PureComponent<Props, State> {
  state = {
    selectItemsToggle: false,
  };

  onSelectAll = () => {
    this.props.onSelectAll(this.props.catId, this.state.selectItemsToggle);
    this.setState({ selectItemsToggle: !this.state.selectItemsToggle });
  };

  render() {
    const items = Object.entries(this.props.items).map(([itemId, item]) => (
      <div key={`${this.props.name}${itemId}`}>
        <Checkbox
          checked={item.selected}
          onChange={() => this.props.onSelect(this.props.catId, itemId)}
        >
          {item.name}
        </Checkbox>
      </div>
    ));
    const { t } = this.props;
    return (
      <NamespacesConsumer>
        {t => (
          <div className="category-viewer">
            <h1>{this.props.name}</h1>
            <Divider className="category-viewer__divider" />
            <div className="category-viewer__items">{items}</div>
            <Divider className="category-viewer__divider" />
            {/* <ButtonGroup minimal={true} vertical={false} alignText="left"> */}
            <div className="button-group">
              <span>
                <Button
                  icon={IconNames.TICK}
                  intent={Intent.PRIMARY}
                  small={true}
                  minimal={true}
                  onClick={this.onSelectAll}
                >
                  {t('preview.button.selectall')}
                </Button>
                <Button
                  icon={IconNames.FAST_FORWARD}
                  intent={Intent.PRIMARY}
                  small={true}
                  minimal={true}
                  onClick={this.props.onSkip}
                >
                  {t('preview.button.skip')}
                </Button>
              </span>
            </div>
          </div>
        )}
      </NamespacesConsumer>
    );
  }
}

export const CategoryViewer = withI18n()(CCategoryViewer);
