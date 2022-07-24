import vueSnapshotSerializer from 'jest-serializer-vue';
import { enableAutoDestroy } from '@vue/test-utils';

enableAutoDestroy(afterEach);
expect.addSnapshotSerializer(vueSnapshotSerializer);
