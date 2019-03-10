import * as React from 'react';
import { ClearableInput } from '../ClearableInput';
import { Item, Items } from '../../../data/suggestedItems';
import {
  Button,
  Intent,
  Popover,
  PopoverInteractionKind,
  Position,
  Label,
  Divider,
} from '@blueprintjs/core';
import { NamespacesConsumer, Trans } from 'react-i18next';

type Props = {
  catId: string;
  name: string;
  items: Items;
  color: string;
  onItemAdd: (catId: string, itemId: string) => void;
  onItemRemove: (catId: string, itemId: string) => void;
};

export class CategoryBlock extends React.PureComponent<Props> {
  render() {
    const bgColorStyle = {
      backgroundColor: this.props.color,
    };
    const items = Object.entries(this.props.items).reduce((acc, [itemId, item]) => {
      if (item.selected) {
        acc.push(
          <NamespacesConsumer>
            {t => (
              <Popover
                key={`pwb${this.props.catId}_${itemId}`}
                interactionKind={PopoverInteractionKind.CLICK}
                popoverClassName="bp3-popover-content-sizing"
                position={Position.RIGHT}
                minimal={true}
                className="summary__popover"
              >
                <Label>{item.name}</Label>
                <Button
                  onClick={() => this.props.onItemRemove(this.props.catId, itemId)}
                  intent={Intent.DANGER}
                >
                  <Trans i18nKey="summary.block.button.remove">Remove {item.name}</Trans>
                </Button>
              </Popover>
            )}
          </NamespacesConsumer>,
        );
      }
      return acc;
    }, []);

    return (
      <NamespacesConsumer>
        {t => (
          <div className="summary__category-block" style={bgColorStyle}>
            <h1>{this.props.name}</h1>
            <Divider className="divider" />
            <div className="summary__category-block__items">{items}</div>
            <ClearableInput
              placeholder={t('summary.block.additemplaceholder')}
              onEnter={item => this.props.onItemAdd(this.props.catId, item)}
              style={bgColorStyle}
            />
          </div>
        )}
      </NamespacesConsumer>
    );
  }
}
