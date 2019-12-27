const totalPages = (total, limit) => {
    return Math.ceil(total / limit);
}

const setPage = (page) => {
    return (page === 0 ? 1 : page) -1;
}

module.exports = {
    totalPages,
    setPage
}