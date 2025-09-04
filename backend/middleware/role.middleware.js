export const authorizeRoles = (...role) => {
    return (req, res, next) => {
        if (!req.user || !role.includes(req.user.role)) {
            return res.status(403).json({ message: "Access denied" });
        }
        next()
    }
}