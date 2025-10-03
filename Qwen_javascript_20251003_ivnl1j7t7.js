// js/news-loader.js
// Esta função pode ser usada para carregar notícias dinamicamente
class NewsLoader {
    constructor() {
        this.newsData = [];
        this.archiveData = [];
    }
    
    // Carregar notícias do servidor (simulação)
    async loadNewsFromServer() {
        try {
            // Em um sistema real, aqui seria uma chamada AJAX para o backend
            // Por enquanto, vamos simular com dados mockados
            this.newsData = [
                {
                    id: 1,
                    title: "Presidente assina decreto para reforma tributária",
                    category: "Política",
                    date: "15 de março de 2024",
                    excerpt: "O presidente da República assinou hoje um decreto que inicia o processo de reforma tributária, com o objetivo de simplificar o sistema fiscal brasileiro e reduzir a carga tributária sobre empresas.",
                    image: "Imagem da Notícia"
                },
                {
                    id: 2,
                    title: "Bolsa de Valores fecha em alta após anúncio do BC",
                    category: "Economia",
                    date: "15 de março de 2024",
                    excerpt: "A bolsa de valores brasileira encerrou o pregão em alta de 2,3% após o Banco Central anunciar medidas para controlar a inflação e estabilizar a economia.",
                    image: "Imagem da Notícia"
                },
                {
                    id: 3,
                    title: "Nova startup brasileira atrai investimento de R$ 50 milhões",
                    category: "Tecnologia",
                    date: "15 de março de 2024",
                    excerpt: "Uma startup de inteligência artificial sediada em São Paulo conseguiu atrair um investimento de R$ 50 milhões de fundos internacionais para expandir suas operações na América Latina.",
                    image: "Imagem da Notícia"
                }
            ];
            
            return this.newsData;
        } catch (error) {
            console.error('Erro ao carregar notícias:', error);
            return [];
        }
    }
    
    // Carregar arquivos do servidor (simulação)
    async loadArchiveFromServer() {
        try {
            // Em um sistema real, aqui seria uma chamada AJAX para o backend
            this.archiveData = [
                { id: 1, title: "Reforma da Previdência avança no Congresso", date: "14/03/2024" },
                { id: 2, title: "Clima: temperatura recorde em várias cidades", date: "13/03/2024" },
                { id: 3, title: "Nova lei de proteção de dados entra em vigor", date: "12/03/2024" },
                { id: 4, title: "Festival de Cinema atrai público recorde", date: "11/03/2024" },
                { id: 5, title: "Eleições municipais: candidatos se registram", date: "10/03/2024" }
            ];
            
            return this.archiveData;
        } catch (error) {
            console.error('Erro ao carregar arquivos:', error);
            return [];
        }
    }
    
    // Método para obter notícias
    getNews() {
        return this.newsData;
    }
    
    // Método para obter arquivos
    getArchive() {
        return this.archiveData;
    }
}

// Criar instância do NewsLoader
const newsLoader = new NewsLoader();

// Exportar para uso em outros scripts (se necessário)
if (typeof window !== 'undefined') {
    window.newsLoader = newsLoader;
}