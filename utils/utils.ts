export const findByTestAttr = (component: any, attr: string) => {
    return component.find(`[data-test-id='${attr}']`)
}