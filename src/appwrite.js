import { Client, Databases, ID, Query } from "appwrite";

const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const TABLE_ID = import.meta.env.VITE_APPWRITE_TABLE_ID;

const client = new Client()
  .setEndpoint('https://appwrite.io') // Fixed http to https
  .setProject(PROJECT_ID); // Fixed setProjects -> setProject

const databases = new Databases(client);

export const updateSearchCount = async (searchTerm, movie) => {
  try {
    // 1. Check if document exists
    const results = await databases.listDocuments(DATABASE_ID, TABLE_ID, [
      Query.equal('searchTerm', searchTerm)
    ]); // Fixed query brackets syntax

    if (results.documents.length > 0) {
      // 2. If it exists, update it
      const doc = results.documents[0];
      await databases.updateDocument(DATABASE_ID, TABLE_ID, doc.$id, {
        count: doc.count + 1,
      });
    } else {
      // 3. If it doesn't exist, create it
      await databases.createDocument(DATABASE_ID, TABLE_ID, ID.unique(), {
        searchTerm,
        count: 1,
        movie_id: movie.id,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`, // Fixed pster_path
      });
    }
  } catch (error) {
    console.error("Appwrite tracking error:", error);
  }
};
