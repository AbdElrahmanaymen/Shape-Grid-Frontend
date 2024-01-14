import { ShapeProps } from "../types/types";

// URL of the server
const requestUrl = "https://shapegrid-1b327639b860.herokuapp.com/shapes/";

// Function to fetch shapes from the server
export async function fetchShapes(
  onSuccessfulFetch: (data: any) => void, // Callback function to be executed when data is fetched successfully
  onError: () => void, // Callback function to be executed when an error occurs
  query?: { id?: number } // Query parameters to be passed with the request
) {
  try {
    const response = await fetch((query) ? `${requestUrl}?id=${query.id}` : requestUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }); // Fetching data from the server

    if (response.ok) {
      const data = await response.json();
      onSuccessfulFetch(data["data"]); // Passing the data to the callback function
    } else {
      onError(); // Calling the error callback function
      console.error("Failed to fetch data");
    }
  } catch (error) {
    onError();  // Calling the error callback function
    console.error("Error:", error);
  }
}

// Function to post a new shape to the server
export async function postShape(
  onSuccessfulPost: () => void, // Callback function to be executed when data is posted successfully
  onError: () => void, // Callback function to be executed when an error occurs
  { shapeData }: { shapeData: ShapeProps } // Data to be posted
) {
  try {
    const response = await fetch(requestUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shapeData),
      credentials: "include",
    }); // Sending data to the server

    if (response.ok) {
      onSuccessfulPost(); // Calling the success callback function
      console.log("Data sent successfully");
    } else {
      onError(); // Calling the error callback function
      console.error("Failed to send data");
    }
  } catch (error) {
    onError(); // Calling the error callback function
    console.error("Error:", error);
  }
};

// Function to update an existing shape on the server
export async function updateShape(
  onSuccessfulUpdate: () => void, // Callback function to be executed when data is updated successfully
  onError: () => void, // Callback function to be executed when an error occurs
  { shape }: { shape: ShapeProps } // Data to be updated
) {
  try {
    const response = await fetch(requestUrl, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(shape),
      credentials: "include",
    }) // Sending data to the server

    if (response.ok) {
      onSuccessfulUpdate(); // Calling the success callback function
      console.log("Data updated successfully");
    } else {
      onError(); // Calling the error callback function
      console.error("Failed to update data");
    }
  } catch (error) {
    onError(); // Calling the error callback function
    console.error("Error:", error);
  }
}

// Function to delete a shape from the server
export async function deleteShape(
  onSuccessfulDelete: () => void, // Callback function to be executed when data is deleted successfully
  onError: () => void, // Callback function to be executed when an error occurs
  { id }: { id: number } // Data to be deleted
) {
  try {
    const response = await fetch(requestUrl, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
      credentials: "include",
    }); // Sending data to the server

    if (response.ok) {
      onSuccessfulDelete(); // Calling the success callback function
      console.log("Data deleted successfully");
    } else {
      onError(); // Calling the error callback function
      console.error("Failed to delete data");
    }
  } catch (error) {
    onError(); // Calling the error callback function
    console.error("Error:", error);
  }
}
