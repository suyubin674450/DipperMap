import React, { useEffect } from 'react';
import type { ILineLayer, ILineLayerConfig } from '../../typings';
import { Form, Select } from 'antd';
import FieldSelect from '../FieldSelect';
import useCommonHook from './components/commonHook';
import LayerTypeSelect from './components/LayerTypeSelect';
import RangeWrapper from './components/RangeWrapper/index';
import ColorWrapper from './components/ColorWrapper/index';
import { LINE_TYPE_LIST } from '../../constants';
import LayerBlend from './components/LayerBlend';

interface IProps {
  layer: ILineLayer;
  onChange: (newLayer: ILineLayer) => void;
}

const LineLayer = ({ layer, onChange }: IProps) => {
  const [form] = Form.useForm<ILineLayerConfig>();
  const { targetDatasetFields, onFormChange } = useCommonHook(layer, onChange);

  useEffect(() => {
    form.setFieldsValue(layer.config);
  }, [layer.config]);

  return (
    <Form
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 19 }}
      labelAlign="left"
      form={form}
      onValuesChange={onFormChange}
    >
      <LayerTypeSelect layer={layer} onChange={onChange} />

      <Form.Item label="线段类型" name="lineType">
        <Select options={LINE_TYPE_LIST} />
      </Form.Item>

      <Form.Item label="起点经度" name="startLngField">
        <FieldSelect fields={targetDatasetFields} />
      </Form.Item>

      <Form.Item label="起点纬度" name="startLatField">
        <FieldSelect fields={targetDatasetFields} />
      </Form.Item>

      <Form.Item label="终点经度" name="endLngField">
        <FieldSelect fields={targetDatasetFields} />
      </Form.Item>

      <Form.Item label="终点纬度" name="endLatField">
        <FieldSelect fields={targetDatasetFields} />
      </Form.Item>

      <ColorWrapper
        label="颜色"
        field="color"
        form={form}
        fields={targetDatasetFields}
        range
      />

      <RangeWrapper
        label="线宽"
        field="lineWidth"
        form={form}
        fields={targetDatasetFields}
      />

      <LayerBlend />
    </Form>
  );
};

export default LineLayer;
