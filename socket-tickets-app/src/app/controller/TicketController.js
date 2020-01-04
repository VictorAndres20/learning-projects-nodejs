class TicketController{
    
    renderIndex = (req, res) => {
        res.render('index',{
            title: 'Turns'
        });
    }

    renderGenerate = (req, res) => {
        res.render('generate',{
            title: 'Generate'
        });
    }

    renderAssign = (req, res) => {
        res.render('assign',{
            title: 'Assign'
        });
    }
}

module.exports = TicketController;