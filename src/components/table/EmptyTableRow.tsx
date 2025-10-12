export const EmptyTableRow = ({ colSpan }: { colSpan: number }) => {
  return (
    <tr>
      <td colSpan={colSpan}>
        <p className="px-8 py-4 font-semibold">Không có dữ liệu...</p>
      </td>
    </tr>
  );
};
