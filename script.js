
                    function highlightText() {
                        // Obter o termo de pesquisa e o parágrafo de texto
                        let searchTerm = document.getElementById('searchBox').value;
                        let textElement = document.getElementById('text');
                        let text = textElement.innerHTML;
            
                        // Remover destaques anteriores substituindo todas as tags <span>
                        text = text.replace(/<span class="highlight">(.*?)<\/span>/g, '$1');
            
                        if (searchTerm) {
                            // Criar uma regex para encontrar o termo de pesquisa
                            let regex = new RegExp(`(${searchTerm})`, 'gi');
                            
                            // Substituir o termo de pesquisa pela versão destacada
                            text = text.replace(regex, '<span class="highlight">$1</span>');
                        }
            
                        // Atualizar o parágrafo com o novo texto destacado
                        textElement.innerHTML = text;
                    }
                