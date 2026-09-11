import {expect, it, vi} from 'vitest';

import {createHostPageIntegration} from '@/integrations/hostPage.js';

it('delegates actions to the host page', () => {
    const click = vi.fn();
    const documentObject = {
        querySelector: vi.fn(() => ({click})),
    };
    const locationObject = {hash: ''};
    const integration = createHostPageIntegration(documentObject, locationObject);

    integration.orderCallback();
    integration.jumpToApplicationForm();

    expect(documentObject.querySelector).toHaveBeenCalledWith('[aria-label="Обратный звонок"]');
    expect(click).toHaveBeenCalledOnce();
    expect(locationObject.hash).toBe('#Connection');
});
