import { getCSS, criarTickConfig } from "./common.js"

const layout = {
    plot_bgcolor: getCSS('--bg-color'),
    paper_bgcolor: getCSS('--bg-color'),
    title: {
        text: 'Redes sociais com mais usuários',
        x: 0,
        font: {
            color: getCSS('--primary-color'),
            size: 30,
            family: getCSS('--font')
        }
    },
    xaxis: {
        tickfont: criarTickConfig(),
        title: {
            text: 'Nome das redes',
            font: {
                color: getCSS('--secondary-color')
            }
        }
    },
    yaxis: {
        tickfont: criarTickConfig(),
        title: {
            text: 'Bilhões de usuários ativos',
            font: {
                color: getCSS('--secondary-color')
            }
        }
    }
}
