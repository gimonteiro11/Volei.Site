// Base de dados tática contendo as coordenadas (em porcentagem top e left) 
// para cada jogador em cada uma das 6 rotações do sistema 5:1, além das explicações.
const rotacoes = {
    1: {
        coordenadas: {
            "p-lev": { top: "75%", left: "30%" }, // Fundo, aguardando para infiltrar
            "p-op":  { top: "25%", left: "70%" }, // Na rede (saída/posição 2)
            "p-p1":  { top: "20%", left: "30%" }, // Na rede (ponta/posição 4)
            "p-p2":  { top: "80%", left: "70%" }, // No fundo (recepção)
            "p-c":   { top: "45%", left: "30%" }, // Na rede (central/posição 3)
            "p-l":   { top: "85%", left: "50%" }  // No fundo (substitui o central)
        },
        texto: "<strong>Rotação 1:</strong> O Levantador está na posição 1 (fundo). Na recepção do saque adversário, ele aguarda no fundo da quadra e infiltra rapidamente para a zona de levantamento (entre as posições 2 e 3), tendo três opções nítidas de ataque (duas pontas e o meio)."
    },
    2: {
        coordenadas: {
            "p-lev": { top: "80%", left: "50%" }, // Fundo/Centro para infiltração defensiva
            "p-op":  { top: "75%", left: "70%" }, // Fundo (posição 1)
            "p-p1":  { top: "20%", left: "30%" }, // Na rede (posição 4)
            "p-p2":  { top: "80%", left: "20%" }, // Fundo (posição 5)
            "p-c":   { top: "45%", left: "30%" }, // Na rede (posição 3)
            "p-l":   { top: "25%", left: "70%" }  // Na rede (frente - aguardando troca/saque)
        },
        texto: "<strong>Rotação 2:</strong> O Levantador encontra-se na posição 6. O Oposto recua para a defesa na posição 1. A linha de passe costuma ser composta por três passadores no fundo para estabilizar a recepção antes da infiltração."
    },
    3: {
        coordenadas: {
            "p-lev": { top: "45%", left: "30%" }, // Já na rede (posição 3)
            "p-op":  { top: "75%", left: "30%" }, // Fundo
            "p-p1":  { top: "20%", left: "30%" }, // Na rede (posição 4)
            "p-p2":  { top: "80%", left: "70%" }, // Fundo
            "p-c":   { top: "20%", left: "70%" }, // Na rede (posição 2)
            "p-l":   { top: "85%", left: "50%" }  // Fundo
        },
        texto: "<strong>Rotação 3:</strong> Vantagem tática! O Levantador já está posicionado na rede (posição 3). Não é necessária a infiltração por trás, permitindo um jogo extremamente rápido e bolas de tempo curto direto com os centrais e pontas."
    },
    4: {
        coordenadas: {
            "p-lev": { top: "25%", left: "30%" }, // Na rede (posição 2)
            "p-op":  { top: "80%", left: "50%" }, // Fundo
            "p-p1":  { top: "20%", left: "70%" }, // Na rede (posição 4)
            "p-p2":  { top: "75%", left: "20%" }, // Fundo
            "p-c":   { top: "45%", left: "30%" }, // Meio da rede
            "p-l":   { top: "85%", left: "80%" }  // Fundo
        },
        texto: "<strong>Rotação 4:</strong> O Levantador está na saída de rede (posição 2). A equipe compacta a linha de passe no fundo e o levantador distribui as jogadas a partir da sua própria posição na rede, mantendo o oposto escondido no fundo."
    },
    5: {
        coordenadas: {
            "p-lev": { top: "20%", left: "70%" }, // Na rede (posição 4)
            "p-op":  { top: "45%", left: "30%" }, // Meio/Rede
            "p-p1":  { top: "80%", left: "70%" }, // Fundo
            "p-p2":  { top: "20%", left: "30%" }, // Na rede
            "p-c":   { top: "75%", left: "30%" }, // Fundo
            "p-l":   { top: "85%", left: "50%" }  // Fundo
        },
        texto: "<strong>Rotação 5:</strong> O Levantador está na entrada de rede (posição 4). Nesta configuração, exige-se bastante atenção na troca de posições pós-saque para que o levantador e os atacantes encontrem seus devidos lugares sem cometer faltas de rotação."
    },
    6: {
        coordenadas: {
            "p-lev": { top: "75%", left: "70%" }, // Fundo (posição 5)
            "p-op":  { top: "20%", left: "30%" }, // Na rede
            "p-p1":  { top: "80%", left: "30%" }, // Fundo
            "p-p2":  { top: "20%", left: "70%" }, // Na rede
            "p-c":   { top: "45%", left: "30%" }, // Na rede
            "p-l":   { top: "85%", left: "50%" }  // Fundo
        },
        texto: "<strong>Rotação 6:</strong> O Levantador está na posição 5 (fundo esquerdo). Ele realiza a diagonal longa de infiltração em direção ao centro da rede logo após a batida do saque adversário."
    }
};

/**
 * Função principal para alternar as rotações
 * @param {number} num - Número da rotação (1 a 6)
 */
function mudarRotacao(num) {
    // 1. Gerencia o estado visual dos botões (adiciona/remove a classe 'active')
    const botoes = document.querySelectorAll('.btn-rotacao');
    botoes.forEach(btn => btn.classList.remove('active'));
    
    // Identifica qual botão disparou o evento e o marca como ativo
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    // 2. Busca os dados correspondentes à rotação selecionada
    const dadosRotacao = rotacoes[num];
    if (!dadosRotacao) return;

    // 3. Aplica as novas coordenadas em cada elemento de jogador com animação CSS
    const coordenadasJogadores = dadosRotacao.coordenadas;
    for (const [idJogador, pos] of Object.entries(coordenadasJogadores)) {
        const elementoJogador = document.getElementById(idJogador);
        if (elementoJogador) {
            elementoJogador.style.top = pos.top;
            elementoJogador.style.left = pos.left;
        }
    }

    // 4. Atualiza dinamicamente o painel descritivo inferior
    const painelInfo = document.getElementById('info-content');
    if (painelInfo) {
        painelInfo.innerHTML = `<h3>Rotação ${num}</h3><p>${dadosRotacao.texto}</p>`;
    }
}

// Inicializa automaticamente o simulador na Rotação 1 assim que a página carregar
window.addEventListener('DOMContentLoaded', () => {
    mudarRotacao(1);
});