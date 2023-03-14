const Admin = require('../../models/admin');

const login = async (req, res) => {
    const data = req.body;

    try {
        const admin = await Admin.findOne({ 'name': data.login });

        console.log(admin);

        if (!admin) return res.status(200).json({ success: false });

        return res.status(200).json({ success: true });

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false });   
    }
};

module.exports = {
    login,
};