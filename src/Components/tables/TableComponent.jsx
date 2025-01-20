import React, { useState } from "react";
import { Table, TreeSelect } from "antd";

const { TreeNode } = TreeSelect;

const TableComponent = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: 1,
      verwendung: "Kunde",
      zugehoerig: "Superkunde",
      tele_art: "Telefon",
    },
    {
      key: 2,
      verwendung: "Kunde",
      zugehoerig: "Lieber Kunde",
      tele_art: "Telefon",
    },
    { key: 3, verwendung: "Lager", zugehoerig: "Lager Nord", tele_art: "Fax" },
    {
      key: 4,
      verwendung: "Mitarbeiter",
      zugehoerig: "Max Mustermann",
      tele_art: "Handy",
    },
  ]);

  const [filteredData, setFilteredData] = useState(dataSource);
  const [selectedFilter, setSelectedFilter] = useState(undefined);

  const treeData = [
    {
      title: "Kunde",
      value: "Kunde",
      children: [
        { title: "Superkunde", value: "Kunde-Superkunde" },
        { title: "Lieber Kunde", value: "Kunde-Lieber Kunde" },
      ],
    },
    {
      title: "Lager",
      value: "Lager",
      children: [{ title: "Lager Nord", value: "Lager-Lager Nord" }],
    },
    {
      title: "Mitarbeiter",
      value: "Mitarbeiter",
      children: [
        { title: "Max Mustermann", value: "Mitarbeiter-Max Mustermann" },
      ],
    },
  ];

  const handleFilterChange = (value) => {
    setSelectedFilter(value);

    if (!value) {
      setFilteredData(dataSource);
      return;
    }

    const [mainCategory, subCategory] = value.split("-");
    const newFilteredData = dataSource.filter((item) => {
      if (subCategory) {
        return (
          item.verwendung === mainCategory && item.zugehoerig === subCategory
        );
      }
      return item.verwendung === mainCategory;
    });

    setFilteredData(newFilteredData);
  };

  const columns = [
    { title: "Key", dataIndex: "key", key: "key" },
    { title: "Verwendung", dataIndex: "verwendung", key: "verwendung" },
    { title: "Zugehörig", dataIndex: "zugehoerig", key: "zugehoerig" },
    { title: "Art", dataIndex: "tele_art", key: "tele_art" },
  ];

  return (
    <div className="p-8">
      <div className="mb-4">
        <TreeSelect
          style={{ width: 300 }}
          value={selectedFilter}
          onChange={handleFilterChange}
          treeDefaultExpandAll
          placeholder="Filter by Verwendung"
          allowClear
        >
          {treeData.map((parent) => (
            <TreeNode
              key={parent.value}
              value={parent.value}
              title={parent.title}
            >
              {parent.children.map((child) => (
                <TreeNode
                  key={child.value}
                  value={child.value}
                  title={child.title}
                />
              ))}
            </TreeNode>
          ))}
        </TreeSelect>
      </div>
      <Table dataSource={filteredData} columns={columns} />
    </div>
  );
};

export default TableComponent;
