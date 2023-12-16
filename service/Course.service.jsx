import axios from "axios";

export const GetCourse = async (callback) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/course/get`);
    callback(response.data);
  } catch (error) {
    console.error(error);
  }
};


export async function getCourseDetail(title) {
  try {
    const response = await axios.get(`http://easy-class-407401.et.r.appspot.com/api/course/details?title=${title}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching course details:", error);
    throw error;
  }

}

