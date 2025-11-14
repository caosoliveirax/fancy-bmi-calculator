export const getMessage = (category: string) => {
  switch (category) {
    case 'Abaixo do peso':
      return 'Você está abaixo do peso ideal. Pode ser importante verificar sua alimentação e consultar um profissional.'
    case 'Normal':
      return 'Parabéns! Você está com o peso ideal. Mantenha uma alimentação equilibrada e pratique exercícios regularmente.'
    case 'Sobrepeso':
      return 'Você está um pouco acima do peso ideal. Considere adotar hábitos mais saudáveis, como uma dieta balanceada e atividade física.'
    case 'Obesidade grau 1':
      return 'Cuidado! É importante buscar orientação médica para melhorar sua saúde e evitar complicações.'
    case 'Obesidade grau 2':
      return 'Atenção! Procure um profissional de saúde para um acompanhamento adequado e mudanças no estilo de vida.'
    case 'Obesidade grau 3':
      return 'Risco elevado! É fundamental buscar ajuda médica para um plano de tratamento e mudanças significativas na rotina.'
    default:
      return ''
  }
}
