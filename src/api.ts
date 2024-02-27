export interface IProduct {
    id: number,
    image: string,
    name: string,
    price: number
}

export interface IProductList {
    items: IProduct[]
}

export const getProduct = async (): Promise<IProductList> => {
    try {
        const url: string = 'https://appevent.ru/dev/task1/catalog';
        const response: Response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Запрос завершился с ошибкой: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Ошибка получения данных:', error);
        throw error;
    }
};