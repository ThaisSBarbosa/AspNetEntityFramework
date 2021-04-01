class Carrinho {

    clickIncremento(btn) {

        let data = this.getData(btn);
        $('#inputQtde').val(++data.Quantidade);
        this.postQuantidade(data);
        preencheQtde(data.Quantidade);
    }

    clickDecremento(btn) {

        let data = this.getData(btn);
        $('#inputQtde').val(--data.Quantidade);
        this.postQuantidade(data);
        preencheQtde(data.Quantidade);
    }

    updateQuantidade(input) {

        let data = this.getData(input);
        this.postQuantidade(data);
    }

    getData(elemento) {
        var linhaDoItem = $(elemento).parents('[item-id]');
        var itemId = $(linhaDoItem).attr('item-id');
        var novaQtde = $(linhaDoItem).find('input').val();

        return {
            Id: itemId,
            Quantidade: novaQtde
        };
    }

    postQuantidade(data) {
        $.ajax({
            url: '/pedido/UpdateQuantidade',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data)
        });
    }

}

var carrinho = new Carrinho;