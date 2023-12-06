// @vitest-environment jsdom
import { beforeEach, expect, it } from 'vitest'

beforeEach(async () => {
    const div = document.createElement('div');
    div.id = 'made-with';
    document.body.appendChild(div);

    await import('../main.js');
});


it('should render the made-with component', () => {
    expect(document.getElementById('made-with')).not.toBeNull();
    expect(document.getElementById('spinner')).not.toBeNull();
    expect(document.getElementById('emojis')).not.toBeNull();

    expect(document).toMatchSnapshot();
});
