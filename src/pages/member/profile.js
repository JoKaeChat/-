import MainLayout from "../../components/mainLayout";
import s from "../../styles/Wikidoc.module.css";
import { useState, useEffect } from "react";

function WikiDocHistory() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/user", {
          method: "GET",
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setUser(data);
          //console.log(data);
        } else {
          throw new Error("Request failed with status " + response.status);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  console.log(user[0]);
  return (
    <MainLayout>
      <h1>{user[0].userID}</h1>
    </MainLayout>
  );
}

export default WikiDocHistory;
