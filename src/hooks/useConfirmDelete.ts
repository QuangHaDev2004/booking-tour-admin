import Swal from "sweetalert2";

export const useConfirmDelete = () => {
  const confirmDelete = async ({ endpoint }: { endpoint: string }) => {
    const result = await Swal.fire({
      title: "Bạn có chắc chắn muốn xóa?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Vẫn xóa",
      cancelButtonText: "Hủy",
    });

    if (result.isConfirmed) {
      console.log(endpoint);
    }
  };

  return { confirmDelete };
};
