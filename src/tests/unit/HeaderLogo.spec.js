import { mount } from '@vue/test-utils';
import HeaderLogo from '@/components/Header/HeaderLogo.vue';

describe('HeaderLogo Component', () => {
    it('Render a logo image', () => {
        let img_title = 'Intricately'
        let img_src = '../src/images/logo-pink.png'

        const wrapper = mount(HeaderLogo, {
            propsData: {
                img_title: img_title,
                img_src: img_src
            }
        });

        expect(wrapper.props('img_title')).toBe(img_title);
        expect(wrapper.props('img_src')).toBe(img_src);
    })
});
