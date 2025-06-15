import { useAppContext } from "@/Context/AppContext";
import axios from "axios";
import toast from "react-hot-toast";

const useUpdateStatus = () => {

  const { cookieData } = useAppContext();


    const updateStatus = async (e: React.MouseEvent<HTMLButtonElement> ,taskId:string,status:string) => {
        e.stopPropagation()
      // Check if we have the required data
      if (!cookieData?.id || !cookieData?.role) {
        return;
      }

      const loadingId = toast.loading("Fetching tasks...")

      try {
        const response = await axios.get(
          `https://task-management-backend-kohl-omega.vercel.app/update-task/${taskId}`
        );

        console.log("response is here",response)

        // Adjust based on your actual API response structure
        toast.success("Tasks Fetched",{id:loadingId})
      } catch (err) {
        console.error("Error fetching tasks:", err);
        toast.error("Failed to fetch tasks",{id:loadingId})
      } finally {
      }
    };




  return {
    updateStatus
  };
};

export default useUpdateStatus;