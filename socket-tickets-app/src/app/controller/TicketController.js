class TicketController{
    
    renderIndex = (req, res) => {
        res.render('index',{
            title: 'Turns'
        });
    }
}

module.exports = TicketController;