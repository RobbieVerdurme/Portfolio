import { Tab } from '@customTypes/Tab';
import { useState } from 'react';
import { Button } from '@elements/button/Button';
import List from '@elements/list/List';
import './Tabs.tsx.css';

export function Tabs({ tabs }: { tabs: Tab[] }) {
  const [activeTab, setActiveTab] = useState<Tab>(tabs && tabs[0]);

  return (
    <div className="tabs">
      <List className="tab-nav" direction="row">
        {tabs.map((tab) => (
          <List.Item key={tab.label} className={`tab-nav-item`}>
            <Button
              className="tab-nav-item-content"
              variant={tab.label == activeTab.label ? 'accent' : 'primary'}
              onClick={() => setActiveTab(tab)}
            >
              {tab.icon && <i className={`tab-nav-item-content-icon ${tab.icon}`} />}
              <span className="tab-nav-item-content-label">{tab.label}</span>
            </Button>
          </List.Item>
        ))}
      </List>
      <div className="tab-content">{activeTab.component}</div>
    </div>
  );
}
