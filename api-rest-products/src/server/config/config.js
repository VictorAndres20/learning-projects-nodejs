/** ********************* SERVER CONFIG *********************** */
/** Port */
process.env.PORT = process.env.PORT || 8000;
/*********** */

/** ********************* DB CONFIG *********************** */
/** DB host */
process.env.DB_HOST = "vapedraza.com";
/*********** */

/** DB port */
process.env.DB_PORT = "27017";
/*********** */

/** DB Protocol */
process.env.DB_PROTOCOL = "mongodb";
/*********** */

/** DB Name */
process.env.DB_NAME = "products";
/*********** */

/** ********************* USERS PAGEABLE CONFIG *********************** */
/** DB host */
process.env.USERS_PAGE_LIMIT = 4;
/*********** */

/** ********************* JWT CONFIG *********************** */
/** JWT secret - seed */
process.env.JWT_SECRET = "Jhysbb-wybdsop-spw";
/*********** */

/** JWT expiration time in seconds */
process.env.JWT_EXPIRES = 60 * 60 * 24 * 30
/*********** */