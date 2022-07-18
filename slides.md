---
theme: default
colorSchema: dark
layout: cover
hideInToc: true
background: https://source.unsplash.com/collection/94734566/1920x1080
---
  
# Introduction to automated frontend testing

---
hideInToc: true
layout: image-left
image: https://source.unsplash.com/collection/94734566/1920x1080
---

# Table of contents

<Toc/>

---
layout: section
---

# What is automated frontend testing?

---
hideInToc: true
---

# What is automated frontend testing?

<div v-click>

#### **Testing** - method to check whether the actual software product does not match expected requirements.

- correctness
- performance
- security
- accessibility
</div>

<div class="mt-4" v-click>

#### **Automated testing** - code, that when executed, automatically tests other code.

</div>

<div class="mt-4" v-click>

#### **Automated frontend testing** - automated testing software, that tests front end applications.

</div>
<div class="my-2" v-click>- validating what people see on the screen</div>
<div class="my-2" v-click>- validating application behavior cross-browsers and cross-platforms</div>
<div class="my-2" v-click>- detecting client side performance issues</div>
<div class="my-2" v-click>- detecting accessibility issues</div>

<div v-click>

#### Tests allow us to find errors in the code and increase its quality, but they do not guarantee correctness.

</div>

---
layout: section
---

# Why should we test?

---
hideInToc: true
---

# Why should we test?

<div class="grid grid-cols-2 gap-4">
<div v-click>
    <img src="/assets/computer-bug.jpg"/>
    <p>Computer Mark II, Grace Hopper, Harvard, 1947</p>
</div>
<div>
<div v-click>

#### Not having automated tests results in many pain points:

</div>
<div class="my-2" v-click>- increased risk of functionalities not working according to the specification</div>
<div class="my-2" v-click>- repeating manual tests</div>
<div class="my-2" v-click>- introducing regressions</div>
<div class="my-2" v-click>- lower code quality</div>

<div v-click>

#### Automated tests can solve most of the problems mentioned above.
</div>
</div>
</div>





---
layout: section
---

# Tests pyramid

---
hideInToc: true
---

# Tests pyramid

| Type | Description | Tools |
|-|-|-|
| Unit | check that individual unit of code produces expected output or side effects (it can be function, class, composable, component...) | Jest, Vitest
| Integration/Component | check that your component mounts, renders, can be interacted with, and behaves as expected. | Vue Test Utils, Vue Testing Library, Cypress Component Testing
| End to End | check features that span multiple pages and make real network requests against your production-built Vue application. These tests often involve standing up a database or other backend | Cypress, Selenium, Playwright

<div v-click class="mt-4">
This division is not very strict. Depending on how we write tests, component testing can be considered as unit or integration testing.
</div>

<div v-click class="mt-4">
Today we will focus on Vitest + Vue Test Utils.
</div>

---
layout: section
---

# Vitest

---
hideInToc: true
---

# Vitest

<div class="my-2" v-click>- unit testing framework</div>
<div class="my-2" v-click>- vite powered</div>
<div class="my-2" v-click>- jest compatible</div>
<div class="my-2" v-click>- smart watch mode</div>
<div class="my-2" v-click>- c8 code coverage</div>
<div class="my-2" v-click>- recommended to use by official vue docs</div>

<div class="mt-4" v-click>
<div class="mb-2">Getting started:</div>

```bash
npm install -D vitest
```
</div>
<div class="grid grid-cols-2 gap-4 mt-4">
<div v-click>
<div class="mb-2">Run with hot reloading:</div>

```bash
vitest
```
</div>
<div v-click>
<div class="mb-2">Run once:</div>

```bash
vitest run
```
</div>
<div v-click>
<div class="mb-2">Run subset of tests:</div>

```bash
vitest foobar
```
</div>
<div v-click>
<div class="mb-2">Run once and generate coverage:</div>

```bash
vitest run --coverage
```
</div>
</div>

---
hideInToc: true
---

# Vitest

<div class="grid grid-cols-2 gap-4 mt-4">
<div v-click>
<div class="mb-2">describe, it:</div>

```js
const myBeverage = { delicious: true, sour: false };
describe('my beverage', () => {
  it('is delicious', () => {
    expect(myBeverage.delicious).toBeTruthy();
  });

  test('is not sour', () => {
    expect(myBeverage.sour).toBeFalsy();
  });
});
```
</div>
<div v-click>
<div class="mb-2">afterAll, afterEach, beforeAll, beforeEach:</div>

```js
describe('test suite using store', () => {
  beforeEach(() => {
    initializeStore();
  });
  it('test using store', () => { ... });
});

afterAll(() => {
  cleanup();
});
```
</div>
<div v-click>
<div class="mb-2">matchers - equality:</div>

```js
expect(2 + 2).toBe(4);
expect({ one: 1 }).toEqual({ one: 1 });
expect({ one: 1 }).not.toBe({ one: 1 });
```
</div>
<div v-click>
<div class="mb-2">matchers - truthiness:</div>

```js
expect(null).toBeNull();
expect(undefined).toBeUndefined();
expect('').toBeFalsy()
expect(1).toBeTruthy();
```
</div>
</div>

---
hideInToc: true
---

# Vitest

<div class="grid grid-cols-2 gap-4 mt-4">
<div v-click>
<div class="mb-2">matchers - numbers:</div>

```js
expect(4).toBeGreaterThan(3);
expect(3.5).toBeGreaterThanOrEqual(3.5);
expect(2).toBeLessThan(5);
```
</div>
<div v-click>
<div class="mb-2">matchers - floats, strings, iterables:</div>

```js
expect(0.2 + 0.1).not.toBe(0.3);
expect(0.2 + 0.1).toBeCloseTo(0.3);
expect('Christoph').toMatch(new RegExp('stop'));
expect([1, 1, 2, 3, 5, 8, 13]).toContain(5);
expect([1, 1, 2, 3, 5, 8, 13]).toHaveLength(7);
```
</div>
<div v-click>
<div class="mb-2">functions:</div>

```js
const rept = vi.fn((str, num) => str.repeat(num));
rept('a', 3);
expect(rept).toHaveBeenCalled();
expect(rept).toHaveBeenCalledWith('a', 3);
expect(rept).toHaveBeenCalledWith(expect.anything(), 3);
expect(rept).toHaveReturnedWith('aaa');
```
</div>
<div v-click>
<div class="mb-2">mocking globals variables:</div>

```js
const IntersectMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  unobserve: vi.fn(),
}));
vi.stubGlobal('IntersectionObserver', IntersectMock);
```
</div>
</div>

---
hideInToc: true
---

# Vitest

<div v-click>
<div class="mb-2">mocking modules:</div>
<div class="grid grid-cols-2 gap-2">

```js
// use-object.js
export function useObject() {
  return { method: () => true };
}
// file.js
import { useObject } from 'use-object';
const obj = useObject();
obj.method();
```

```js
// file.spec.js
import { useObject } from 'some-path';
vi.mock('some-path', () => ({
  useObject: vi.fn(() => ({
    method: vi.fn(),
  })),
}));
```
</div>
</div>

<div v-click>
<div class="mb-2">snapshot testing:</div>
<div class="grid grid-cols-2 gap-2">

```js
import { mount } from '@vue/test-utils';
import Loader from '@/Loader.vue';

describe('Loader.vue', () => {
  it('match snapshot', () => {
    const wrapper = mount(Loader, {
      propsData: { loading: true },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
```

```text
exports[`Loader.vue > match snapshot 1`] = `
"<div class=\\"text-center\\">
  <div class=\\"v-progress-circular\\">
    <i class=\\"v-icon material-icons\\">loading</i>
  </div>
  <p class=\\"pt-2 mb-0\\">Loading</p>
</div>"
`;
```
</div>
</div>

---
layout: section
---

# Vue Test Utils

---
hideInToc: true
---

# Vue Test Utils

<div class="my-2" v-click>- official component testing utility library for Vue.js</div>
<div class="my-2" v-click>- aimed to simplify testing Vue.js components</div>
<div class="my-2" v-click>- provides some methods to mount and interact with Vue components in an isolated manner</div>

<div class="mt-4" v-click>
<div class="mb-2">Getting started:</div>

```bash
npm install -D @vue/test-utils
```
</div>

<div class="grid grid-cols-2 gap-4">
<div v-click class="mt-3">
<div class="mb-2">mount:</div>

```js
import { mount } from '@vue/test-utils';
import Foo from './Foo.vue';

describe('Foo', () => {
  it('renders a div', () => {
    const wrapper = mount(Foo);
    expect(wrapper.contains('div')).toBe(true);
  });
});
```
</div>
<div v-click class="mt-3">
<div class="mb-2">shallowMount:</div>

```js
import { shallowMount } from '@vue/test-utils';
import Foo from './Foo.vue';

describe('Foo', () => {
  it('renders red div', () => {
    const wrapper = shallowMount(Foo, {
      propsData: {
        color: 'red',
      },
    });
    expect(wrapper.props().color).toBe('red');
  });
});
```
</div>
</div>

---
hideInToc: true
---

# Vue Test Utils

<div class="grid grid-cols-2 gap-4">
<div v-click>
<div class="mb-2">mocks:</div>

```js
import { mount } from '@vue/test-utils';
import Foo from './Foo.vue';

describe('Foo', () => {
  it('contains the correct route', () => {
    const $route = { path: 'projects/9/apps/321' };
    const wrapper = mount(Foo, {
      mocks: {
        $route,
      },
    });
    expect(wrapper.vm.$route.path).toBe($route.path);
  });
});
```
</div>
<div v-click>
<div class="mb-2">stubs:</div>

```js
import { mount } from '@vue/test-utils';
import App from '@/App.vue';


describe('App.vue', () => {
  it('match snapshot', () => {
    const wrapper = mount(App, {
      stubs: ['Toolbar', 'ErrorDialog', 'Notifications'],
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});

```
</div>
</div>

---
hideInToc: true
---

# Vue Test Utils

<div class="grid grid-cols-1 gap-4">
<div v-click>
<div class="mb-2">createLocalVue:</div>

```js
import Vuex from 'vuex';
import { mount, createLocalVue } from '@vue/test-utils';
import Foo from '@/components/Foo.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store({
  state: { username: 'alice' },
});

describe('Foo', () => {
  it('renders a username using Vuex store', () => {
    const wrapper = mount(Foo, { 
      store, 
      localVue,
    });

    expect(wrapper.find('.name').text()).toBe('alice');
  });
});
```
</div>
</div>

---
hideInToc: true
---

# Vue Test Utils

<div class="grid grid-cols-2 gap-4">
<div v-click>
<div class="mb-2">attributes():</div>

```js
import { mount } from '@vue/test-utils';
import Foo from './Foo.vue';

const wrapper = mount(Foo);
expect(wrapper.attributes().id).toBe('foo');
expect(wrapper.attributes('id')).toBe('foo');
```
</div>
<div v-click>
<div class="mb-2">classes():</div>

```js
import { mount } from '@vue/test-utils';
import Foo from './Foo.vue';

const wrapper = mount(Foo);
expect(wrapper.classes()).toContain('bar');
expect(wrapper.classes('bar')).toBe(true);
```
</div>
<div v-click>
<div class="mb-2">destroy():</div>

```js
import { mount } from '@vue/test-utils';
import Foo from './Foo.vue';

const wrapper = mount(Foo);
wrapper.destroy();
```
</div>
<div v-click>
<div class="mb-2">emitted():</div>

```js
import { mount } from '@vue/test-utils';

it('emit demo', async () => {
  const wrapper = mount(Component);
  wrapper.vm.$emit('foo');
  wrapper.vm.$emit('foo', 123);
  /* { foo: [[], [123]] } */
  expect(wrapper.emitted().foo).toBeTruthy();
  expect(wrapper.emitted('foo')).toBeTruthy();
  expect(wrapper.emitted().foo.length).toBe(2);
  expect(wrapper.emitted().foo[1]).toEqual([123]);
});
```
</div>
</div>

---
hideInToc: true
---

# Vue Test Utils

<div class="grid grid-cols-2 gap-4">
<div v-click>
<div class="mb-2">find():</div>

```js
import { mount } from '@vue/test-utils';
import Foo from './Foo.vue';

const wrapper = mount(Foo);
const div = wrapper.find('div');
```
</div>
<div v-click>
<div class="mb-2">findAll():</div>

```js
import { mount } from '@vue/test-utils';
import Foo from './Foo.vue';

const wrapper = mount(Foo);
const div = wrapper.findAll('div').at(5);
```
</div>
<div v-click>
<div class="mb-2">findComponent(), findAllComponents():</div>

```js
import { mount } from '@vue/test-utils';
import List from './List.vue';
import ListItem from './ListItem.vue';

const wrapper = mount(List);
const second = wrapper.findAllComponents(ListItem).at(2);
```
</div>
<div v-click>
<div class="mb-2">exists():</div>

```js
import { mount } from '@vue/test-utils';
import Foo from './Foo.vue';

const wrapper = mount(Foo);
expect(wrapper.exists()).toBe(true);
expect(wrapper.find('not-exist').exists()).toBe(false);
```
</div>
<div v-click class="-mt-2">
<div class="mb-2">html():</div>

```js
import { mount } from '@vue/test-utils';
import Foo from './Foo.vue';

const wrapper = mount(Foo);
expect(wrapper.html()).toBe('<div><p>Foo</p></div>');
```
</div>
<div v-click class="-mt-2">
<div class="mb-2">isVisible():</div>

```js
import { mount } from '@vue/test-utils';
import Foo from './Foo.vue';

const wrapper = mount(Foo);
expect(wrapper.isVisible()).toBe(true);
```
</div>
</div>

---
hideInToc: true
---

# Vue Test Utils

<div class="grid grid-cols-2 gap-4">
<div v-click>
<div class="mb-2">setData():</div>

```js
import { mount } from '@vue/test-utils';
import Foo from './Foo.vue';

it('setData demo', async () => {
  const wrapper = mount(Foo);
  await wrapper.setData({ foo: 'bar' });
  expect(wrapper.vm.foo).toBe('bar');
});
```
</div>
<div v-click>
<div class="mb-2">setValue():</div>

```js
import { mount } from '@vue/test-utils';
import Foo from './Foo.vue';

it('setValue demo', async () => {
  const wrapper = mount(Foo);
  const textInput = wrapper.find('input[type="text"]');
  await textInput.setValue('some value');
  expect(textInput.element.value).toBe('some value');
});
```
</div>
<div v-click class="-mt-4">
<div class="mb-2">trigger():</div>

```js
import { mount } from '@vue/test-utils';
import Foo from './Foo';

it('trigger demo', async () => {
  const clickHandler = vi.fn();
  const wrapper = mount(Foo, {
    propsData: { clickHandler }
  });
  await wrapper.trigger('click');
  expect(clickHandler).toHaveBeenCalled();
});
```
</div>
</div>

---
hideInToc: true
---

# Vue Test Utils

<div class="grid grid-cols-2 gap-4">
<div v-click class="mt-3">
<div class="mb-2">createWrapper:</div>

```js
import { createWrapper } from '@vue/test-utils';
import MySelect from './MySelect.vue';

describe('MySelect', () => {
  it('when choosing an item emits change event', () => {
    const wrapper = mount(Select, {
      attachTo: document.body,
    });
    const root = createWrapper(document.body);
    wrapper.find('.select').trigger('click');
    root.find('.item:nth-child(2)').trigger('click');
    expect(wrapper.emitted('change')).toBeTruthy();
    wrapper.destroy();
  });
});
```
</div>
<div v-click class="mt-3">
<div class="mb-2">&nbsp;</div>

```js
import { createWrapper } from '@vue/test-utils';
import MySelect from './MySelect.vue';

describe('MySelect', () => {
  it('when choosing an item emits change event', () => {
    const wrapper = mount(Select, {
      attachTo: document.body,
    });

    wrapper.find('.select').trigger('click');
    document
      .querySelector('.item:nth-child(2)')
      .dispatchEvent(
        new MouseEvent('click', {
          bubbles: true
        }),
      );
    expect(wrapper.emitted('change')).toBeTruthy();
    wrapper.destroy();
  });
});
```
</div>
</div>


---
layout: section
---

# Tips and tricks

---
hideInToc: true
---

# Tips and tricks

<div v-click>

### 1. Understand what to test and structure your test accordingly

</div>

<p v-click>

```js
describe('methods', () => {
  /* Testing every method in isolation */
});

describe('computed', () => {
  /* Testing every computed property in isolation */
});

describe('template', () => {
  /* Testing what is rendered */
});
```
</p>

<span v-click class="text-red-500">✘ WRONG!</span><span v-click> We should test component public interface:</span>
<div v-click class="-mt-2">

- rendered template
- emitted events
- side effects like vuex actions, router, etc.
- connection with children
</div>

---
hideInToc: true
---

# Tips and tricks

<div>

### 1. Understand what to test and structure your test accordingly

</div>

<p v-click>

```html
<template>
  <main>
    <div v-if="loading">Loading...</div>
    <template v-else>
      <p v-if="error">Something went wrong!</p>
      <div v-else>Loaded!</div>
    </template>
  </main>
</template>
```
</p>
<p v-click>

```js
describe('when loading', () => {
  it.todo('renders "Loading..." text');
  it.todo('does not render error message');
  it.todo('does not render data');
});
describe('when there is an error', () => {
  it.todo('does not render "Loading..." text');
  it.todo('renders error message');
  it.todo('does not render data');
});
```
</p>

---
hideInToc: true
---

# Tips and tricks

<div v-click>

### 2. Start with component factory

</div>

<p v-click>

```js
describe('TodoList', () => {
  it('when enabled, adding a new item causes update', () => {
    const wrapper = mount(TodoList, {
      propsData: { disabled: false },
      stubs: ['TodoItem'],
      mocks: {
        $todoListStore: {
          addTodo: vi.fn(),
          removeTodo: vi.fn(),
        },
      },
    })
  });
  it('when disabled, adding a new item does not cause update', () => {
    const wrapper = mount(TodoList, {
      propsData: { disabled: true },
      // ... all other options the same
  });
});
```
</p>
<span v-click class="text-red-500">✘ WRONG!</span><span v-click> It's better to extract the component mounting to another function.</span>

---
hideInToc: true
---

# Tips and tricks

<div>

### 2. Start with component factory

</div>

<p v-click>

```js
describe('TodoList', () => {
  let wrapper;
  const createComponent = (propsData) => {
    wrapper = mount(TodoList, {
      propsData,
      stubs: ['TodoItem'],
      mocks: {
        $todoListStore: {
          addTodo: vi.fn(),
          removeTodo: vi.fn(),
        },
      },
    });
  };
  it('when enabled, adding a new item causes update', () => {
    createComponent({ disabled: false });
  });
  it('when disabled, adding a new item does not cause update', () => {
    createComponent({ disabled: true });
  });
});
```
</p>

---
hideInToc: true
---

# Tips and tricks

<div v-click>

### 3. Use helpers to find elements and components

</div>

<p v-click>

```js
describe('My component test', () => {
  let wrapper;

  it('test 1', () => {
    createComponent();
    wrapper.find('button[type="submit"]').trigger('click');
  });

  it('test 2', () => {
    createComponent();
    wrapper.find('button[type="submit"]').trigger('click');
  });
});
```
</p>
<p v-click> What if we change something in the confirmation button?</p>
<p v-click> What if we replace it with custom component?</p>
<span v-click class="text-red-500">✘ WRONG! </span><span v-click>Unreadable and very vulnerable to implementation changes.</span>

---
hideInToc: true
---

# Tips and tricks

<div>

### 3. Use helpers to find elements and components

</div>

<p v-click>

```js
describe('My component test', () => {
  let wrapper;
  const findSubmitButton = () => wrapper.find('button[type="submit"]');

  it('test 1', () => {
    createComponent();
    findSubmitButton().trigger('click');
  });

  it('test 2', () => {
    createComponent();
    findSubmitButton().trigger('click');
  });
});
```
</p>

---
hideInToc: true
---

# Tips and tricks

<div v-click>

### 4. Do not test component internals

</div>
<p v-click>

```html
<div>
  <p>Count:</p><span data-testid="count">{{ count }}</span>
  <p>Double count:</p><span data-testid="double">{{ double }}</span>
  <button data-testid="increment-button" @click="incrementCount">Increment</button>
</div>
```

```js
export default {
  data() {
    return { count: 0 };
  },
  computed: {
    double() {
      return this.count * 2;
    },
  },
  methods: {
    incrementCount() {
      this.count++;
    },
  },
};
```
</p>

---
hideInToc: true
---

# Tips and tricks

<div>

### 4. Do not test component internals

</div>
<p v-click>

```js
describe('Counter', () => {
  it('calls correct method on button click', () => {
    createComponent();
    vi.spyOn(wrapper.vm, 'incrementCount');
  
    findIncrementButton().trigger('click');

    expect(wrapper.vm.incrementCount).toHaveBeenCalled();
    expect(wrapper.vm.count).toBe(1);
  });

  it('calculates double correctly', () => {
    createComponent({ data: { count: 1 } });
    expect(wrapper.vm.double).toBe(2);
  });
});
```
</p>
<span v-click class="text-red-500">✘ WRONG! </span><span v-click>We are not testing component output. Very vulnerable to implementation changes.</span>

---
hideInToc: true
---

# Tips and tricks

<div>

### 4. Do not test component internals

</div>
<p v-click>

```js
describe('Counter', () => {
  it('increases the count on Increment button click', async () => {
    createComponent();
    expect(findCount().text()).toBe('0');
    await findIncrementButton().trigger('click');
    expect(findCount().text()).toBe('1');
  });

  it('calculates double correctly', async () => {
    createComponent({ data: { count: 1 } });
    expect(findDouble().text()).toBe('2');
  });
});
```
</p>
<div v-click>

- forget about wrapper.vm
- do not spy on methods
- if we change implementation details, like method name or computed name, test should pass
</div>

---
hideInToc: true
---

# Tips and tricks

<div v-click>

### 5. Follow the user

</div>
<p v-click>

```js
describe('Counter', () => {
  it('increases the double on increasing count', async () => {
    createComponent({ data: { count: 1 } });
    expect(findDouble().text()).toBe('2');
    wrapper.vm.count = 2;
    expect(findDouble().text()).toBe('4');
  });
});
```
</p>
<p v-click>

```js
describe('Counter', () => {
  it('increases the double on increasing count', async () => {
    createComponent({ data: { count: 1 } });
    expect(findDouble().text()).toBe('2');
    wrapper.setData({ count: 2 });
    expect(findDouble().text()).toBe('4');
  });
});
```
</p>
<span v-click class="text-red-500">✘ WRONG!</span>
<div class="mt-1" v-click>The more your tests resemble the way your software is used, the more confidence they can give you.</div>

---
hideInToc: true
---

# Tips and tricks

<div>

### 5. Follow the user

</div>
<p v-click>

```js
describe('Counter', () => {
  it('increases the double on increasing count', async () => {
    createComponent({ data: { count: 1 } });
    expect(findDouble().text()).toBe('2');
    await findIncrementButton().trigger('click');
    expect(findDouble().text()).toBe('4');
  });
});
```
</p>
<p v-click>This also applies to locators:</p>
<div class="grid grid-cols-2 gap-4">
<div v-click>

```js
findDouble = () => wrapper.find('#double');
findDouble = () => wrapper.find('.double');
```
</div>
<div v-click>

```js
findDouble = () => wrapper.find('[data-testid="count"]');
```
</div>
<div v-click>

```js
findDouble = () => wrapper.findByText('Count');
wrapper.findByRole('heading');
wrapper.findByLabelText('Password');
wrapper.findByTitle('Delete');
```
</div>
<div v-click>

- [Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro)
- [Frontend Test Element Locators](https://css-tricks.com/front-end-test-element-locators/)
- [GitLab's "extendedWrapper"](https://gitlab.com/gitlab-org/gitlab/-/blob/master/spec/frontend/__helpers__/vue_test_utils_helper.js)
</div>
</div>

---
hideInToc: true
---

# Tips and tricks

<div v-click>

### 6. Treat child components as black boxes

</div>

<p v-click>

```html
<div>
  <MyButton :double-count="double" @click="incrementCount">Increment</MyButton>
  <p>Count:</p><span data-testid="count">{{ count }}</span>
</div>
```

```js
import MyButton from './MyButton.vue';
export default {
  components: { MyButton },
  data() {
    return { count: 0 };
  },
  computed: {
    double() { return this.count * 2; },
  },
  methods: {
    incrementCount() {
      this.count++;
    },
  },
};
```
</p>

---
hideInToc: true
---

# Tips and tricks

<div>

### 6. Treat child components as black boxes

</div>

<p v-click>

```js
const findChildButton = () => wrapper.findComponent(MyButton);
const findCount = () => wrapper.find('[data-testid="child-counter"]');

it('passes a correct prop to child button', () => {
  createComponent({ data: { count: 4 } });
  expect(findChildButton().props('double-count')).toBe(8);
});

it('updates count on child button "click" event', async () => {
  createComponent();
  expect(findCount().text()).toBe('0');
  findChildButton().vm.$emit('click');
  await nextTick();
  expect(findCount().text()).toBe('1');
});
```
</p>

---
hideInToc: true
---

# Tips and tricks

<div v-click>

### 7. Mock Vuex in the component

</div>

<p v-click>

```html
<div class="username">{{ username }}</div>
```

```js
export default {
  name: 'Username',
  data() {
    return {
      username: this.$store.state.username,
    };
  },
};
```
</p>

---
hideInToc: true
---

# Tips and tricks

<div>

### 7. Mock Vuex in the component

</div>

<p v-click>

```js
describe('Username', () => {
  let wrapper;
  const createComponent = () => {
    Vue.use(Vuex);
    const store = new Vuex.Store({
      state: {
        username: 'alice',
      },
    });
    wrapper = mount(Username, { 
      store,
    });
  };

  it('renders a username using a real Vuex store', () => {
    createComponent();
    expect(findUsername().text()).toBe('alice');
  });
});
```
</p>
<span v-click class="text-red-500">✘ WRONG! </span><span v-click>We are polluting global Vue instance. Now all tests will have Vuex.</span>

---
hideInToc: true
---

# Tips and tricks

<div>

### 7. Mock Vuex in the component

</div>

<p v-click>

```js
describe('Username', () => {
  let wrapper;
  const createComponent = () => {
    const localVue = createLocalVue();
    localVue.use(Vuex);
    const store = new Vuex.Store({
      state: {
        username: 'alice',
      },
    });
    wrapper = mount(Username, { 
      store, localVue,
    });
  };
  it('renders a username using a real Vuex store (correct way)', () => {
    createComponent();
    expect(findUsername().text()).toBe('alice');
  });
});
```
</p>
<span v-click class="text-red-500">✘ WRONG! </span><span v-click>What if our store implementation is incorrect? Our test will fail.</span>

---
hideInToc: true
---

# Tips and tricks

<div>

### 7. Mock Vuex in the component

</div>

<p v-click>

```js
describe('Username', () => {
  let wrapper;
  const createComponent = () => {
    wrapper = mount(Username, {
      mocks: {
        $store: {
          state: { username: 'alice' },
        },
      },
    });
  };
  it('renders a username using mocked Vuex store', () => {
    createComponent();
    expect(findUsername().text()).toBe('alice');
  });
});
```
</p>

---
hideInToc: true
---

# Tips and tricks

#### 1. Understand what to test and structure your test accordingly
#### 2. Start with component factory
#### 3. Use helpers to find elements and components
#### 4. Do not test component internals
#### 5. Follow the user
#### 6. Treat child components as black boxes
#### 7. Mock Vuex in the component