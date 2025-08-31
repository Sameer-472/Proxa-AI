export const register = async (req, res) => {
    try {

    } catch (error) {
        res.status(401).json({ message: error.message, success: false });
    }
}