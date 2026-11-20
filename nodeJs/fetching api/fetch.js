async function fetchPosts(){
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
    );
        if(!response.ok){
            throw new Error(`error: ${response.status}`);
        }
        const data=response.json();
        return data;
}

async function fetchPostById(id) {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
    );

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    return data;
}

module.exports={
    fetchPosts,
    fetchPostById
   
}