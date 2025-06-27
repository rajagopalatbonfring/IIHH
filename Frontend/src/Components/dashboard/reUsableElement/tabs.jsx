import React, { useState } from "react";

export const Tabs = ({ defaultValue, children, className }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const triggers = React.Children.toArray(children).filter(child => child.type === TabsList);
  const contents = React.Children.toArray(children).filter(child => child.type === TabsContent);

  return (
    <div className={className}>
      {triggers.map(triggerList => React.cloneElement(triggerList, { activeTab, setActiveTab }))}
      {contents.map(content =>
        content.props.value === activeTab ? content : null
      )}
    </div>
  );
};

export const TabsList = ({ children, activeTab, setActiveTab, className }) => (
  <div className={className}>
    {React.Children.map(children, child =>
      React.cloneElement(child, { activeTab, setActiveTab })
    )}
  </div>
);

export const TabsTrigger = ({ value, children, activeTab, setActiveTab }) => (
  <button
    onClick={() => setActiveTab(value)}
    className={`px-4 py-2 rounded ${activeTab === value ? "bg-blue-600 text-white" : "bg-gray-200"}`}
  >
    {children}
  </button>
);

export const TabsContent = ({ children }) => <div className="mt-4">{children}</div>;
