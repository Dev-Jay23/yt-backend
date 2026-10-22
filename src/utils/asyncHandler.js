const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(error => next(error))
    }
}

export { asyncHandler }



// const asyncHandler1 = () => { }
// const asyncHandler2 = (func) => () => { }
// const asyncHandler3 = (func) => async () => { }


// const asyncHandler = (fn) => async (err, req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }