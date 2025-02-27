import React, { useState } from "react";
import { Table, TreeSelect } from "antd";
import { Columns, data, treeData } from "../Constant";

const { TreeNode } = TreeSelect;

const TableComponent = () => {
  const [dataSource, setDataSource] = useState(data);

  const [filteredData, setFilteredData] = useState(dataSource);
  const [selectedFilter, setSelectedFilter] = useState(undefined);

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
      <Table dataSource={filteredData} columns={Columns} />
    </div>
  );
};

export default TableComponent;
