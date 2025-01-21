import { Table } from "antd";
import React from "react";

const TableUsers = () => {
  return (
    <div className="p-8">
      <Table>
        <Table.Column title="Name" dataIndex="name" key="name" />
        <Table.Column title="Email" dataIndex="email" key="email" />
        <Table.Column title="Phone" dataIndex="phone" key="phone" />
        <Table.Column title="Actions" dataIndex="actions" key="actions" />
      </Table>
    </div>
  );
};

export default TableUsers;
