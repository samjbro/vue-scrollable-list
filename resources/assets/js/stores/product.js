import stub from '@/stubs/product';
export const ProductStore = {
    state: {
        products: [stub]
    },
    init() {
        axios.get('/products')
            .then(({data}) => this.state.products = data)
            .catch(error => console.log(error));
    }
};
