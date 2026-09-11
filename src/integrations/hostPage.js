export function createHostPageIntegration(documentObject = document, locationObject = location) {
    return {
        orderCallback() {
            documentObject.querySelector('[aria-label="Обратный звонок"]')?.click();
        },

        jumpToApplicationForm() {
            locationObject.hash = '#Connection';
        },
    };
}
