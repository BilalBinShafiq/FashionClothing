/* eslint-disable arrow-body-style */
module.exports = (fn) => {
  return async (request, response, next) => {
    try {
      return await fn(request, response, next);
    } catch (error) {
      return response.status(500).json({
        status: 'fails',
        error,
      });
    }
  };
};

// module.exports = (fn) => {
//   return (request, response, next) => {
//     fn(request, response, next).catch(next);
//   };
// };
