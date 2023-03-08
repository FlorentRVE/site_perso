// ============================ API FETCH ========================

const API_BASE_URL = './data/projet.json';

// Récupérer tous les projets
export const getData = async () => {
  return await fetch(API_BASE_URL).then((response) => response.json());
};

// Récupérer un projet en fonction de l'id
export const getItem = async (id) => {
  try {
    const response = await fetch(API_BASE_URL);
    const data = await response.json();
    return data.filter(item => item.id === id);
  } catch (error) {
    console.error(error);
  }
};