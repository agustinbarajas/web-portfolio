async function get(endpoint) {
    const response = await fetch(endpoint);
    return await response.json();
}

export { get };
