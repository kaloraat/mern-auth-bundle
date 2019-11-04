exports.signup = (req, res) => {
    console.log('REQ BODY ON SIGNUP', req.body);
    res.json({
        data: 'you hit signup endpoint yay from controllers'
    });
};
