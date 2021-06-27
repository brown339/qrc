export default interface APIResponse {
  data: {
    tag: {
      id: string,
      active: boolean,
      brand: {
        id: string,
        name: string,
        active: boolean,
      },
      product: {
        id: string,
        sku: string,
        name: string,
        image: string,
        details: {
          size: string,
          color: string,
          Fur: string,
          Insulation: string,
        },
        ageRestricted: boolean,
      },
    },
  }
}