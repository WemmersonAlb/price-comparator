function comparePrices() {
    const name1 = document.getElementById('product1-name').value;
    const quantity1 = parseFloat(document.getElementById('product1-quantity').value);
    const price1 = parseFloat(document.getElementById('product1-price').value);

    const name2 = document.getElementById('product2-name').value;
    const quantity2 = parseFloat(document.getElementById('product2-quantity').value);
    const price2 = parseFloat(document.getElementById('product2-price').value);

    const pricePerUnit1 = price1 / quantity1;
    const pricePerUnit2 = price2 / quantity2;

    let resultText = '';

    if (pricePerUnit1 < pricePerUnit2) {
        const betterPrice = (quantity2 * pricePerUnit1).toFixed(2);
        resultText = `A melhor opção de compra é o ${name1}. Para valer a pena, o ${name2} deveria custar no máximo R$ ${betterPrice}.`;
    } else if (pricePerUnit1 > pricePerUnit2) {
        const betterPrice = (quantity1 * pricePerUnit2).toFixed(2);
        resultText = `A melhor opção de compra é o ${name2}. Para valer a pena, o ${name1} deveria custar no máximo R$ ${betterPrice}.`;
    } else {
        resultText = 'As duas decisões são igualmente eficientes';
    }

    document.getElementById('result').innerText = resultText;
}

function resetForm() {
    document.getElementById('product1-name').value = '';
    document.getElementById('product1-quantity').value = '';
    document.getElementById('product1-price').value = '';
    document.getElementById('product2-name').value = '';
    document.getElementById('product2-quantity').value = '';
    document.getElementById('product2-price').value = '';
    document.getElementById('result').innerText = '';
}