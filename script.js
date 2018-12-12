let jd = {
    getIcon: function getIcon(post) {
        switch(post.category) {
            case 'News':
                return "<i class='fas fa-newspaper'></i>";
            case 'Preview':
                return "<i class='fas fa-eye'></i>";
            case 'Game':
                return "<i class='fas fa-gamepad'></i>";
            case 'Interview':
                return "<i class='fas fa-comments'></i>";
            case 'Event':
                return "<i class='fas fa-chalkboard-teacher'></i>";
            case 'Column':
                return "<i class='fas fa-comment-alt'></i>";
            case 'Promo':
                return "<i class='fas fa-money-bill-alt'></i>";
        }
    },
    getCategory: function getCategory(post) {
        switch(post.category) {
            case 'News':
                return "Notícias";
            case 'Preview':
                return "Prévias";
            case 'Game':
                return "Jogos";
            case 'Interview':
                return "Entrevistas";
            case 'Event':
                return "Eventos";
            case 'Column':
                return "Colunas";
            case 'Promo':
                return "Promoções";
        }
    },
    escapeRegex: function escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
      }
}
