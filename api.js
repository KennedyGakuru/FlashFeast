import client from './sanity';
// Helper function for fetching Sanity data
const sanityQuery = (query, params = {}) => client.fetch(query, params);

// Fetch featured restaurants
export const getFeaturedRestaurants = async () => {
  try {
    const data = await sanityQuery(`
     *[_type == 'featured']{
  _id,
  name,
  description,
  "restaurants": restaurant[]->{
    _id,
    name,
    description,
    "imageUrl": image.asset->url,
    address,
    lat,   
    lng,   
    "stars": rating,  
    reviews,
    dishes[]->{
      _id,
      name,
      price,
      description, 
      "imageUrl": image.asset->url
    },
    type->{
      name
    }
  }
}

    `);
    return data || [];
  } catch (error) {
    console.error("Sanity API Error:", error);
    return [];
  }
};


// Fetch restaurant categories
export const getCategories = async () => {
  try {
    const data = await sanityQuery(`
      *[_type == 'category']{
        _id,
        name,
        "imageUrl": image.asset->url
      }
    `);
    return data || [];
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

// Fetch featured restaurant by ID
export const getFeaturedRestaurantById = async (id) => {
  try {
    // console.log("Fetching Featured ID:", id);

    const data = await sanityQuery(`
      *[_type == "featured" && _id == $id]{
        _id,
        name,
        description,
        "restaurants": restaurant[]->{
          _id,
          name,
          description,
          "imageUrl": image.asset->url,
          address,
          lat,
          lng,
          "stars": rating,
          reviews,
          dishes[]->{
            _id,
            name,
            price,
            description,
            "imageUrl": image.asset->url
          },
          type->{
            name
          }
        }
      }[0]
    `, { id });

    // console.log("Final Fetched Data:", data);
    return data || null;
  } catch (error) {
    console.error(`Sanity fetch error for ID ${id}:`, error);
    return null;
  }
};


