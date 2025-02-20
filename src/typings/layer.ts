import type { IEntity } from './common';
import { BlendType } from '@antv/l7-core/es/services/layer/ILayerService';

export type ILayerType = 'point' | 'line' | 'trip' | 'polygon' | 'hex' | 'heat';

export type IBlendType = keyof typeof BlendType;

export interface IBaseLayer extends IEntity {
  type: ILayerType;
  config: Record<string, any>;
  visible: boolean;
  zIndex: number;
}

export interface ILayerRange {
  value: number;
  rangeValue: [number, number];
  field?: string | null;
}

export interface ILayerSingleColor {
  value: string;
  field?: null;
  enable?: boolean;
}

export interface ILayerDoubleColor {
  value: [string, string];
  field?: null;
  enable?: boolean;
}

export interface ILayerFieldColor {
  value: string[];
  field: string;
  enable?: boolean;
}

export interface IPointLayerConfig {
  lngField?: string | null;
  latField?: string | null;
  fillColor: ILayerSingleColor | ILayerFieldColor;
  borderColor: ILayerSingleColor;
  radius: ILayerRange;
  blendType: IBlendType;
}

export type ILineLayerLineType = 'line' | 'arcmini';

export interface ILineLayerConfig {
  lineType: ILineLayerLineType;
  startLngField?: string | null;
  startLatField?: string | null;
  endLngField?: string | null;
  endLatField?: string | null;
  color: ILayerDoubleColor | ILayerFieldColor;
  lineWidth: ILayerRange;
  blendType: IBlendType;
}

export interface IPolygonLayerConfig {
  geoField?: string | null;
  fillColor: ILayerSingleColor | ILayerFieldColor;
  borderColor: ILayerSingleColor | ILayerFieldColor;
  borderWidth: ILayerRange;
  blendType: IBlendType;
}

export interface ITripLayerConfig {
  geoField?: string | null;
  color: ILayerDoubleColor | ILayerFieldColor;
  lineWidth: ILayerRange;
  blendType: IBlendType;
}

export interface IHeatLayerConfig {
  fillColor: ILayerSingleColor | ILayerFieldColor;
  magField: string;
  ranges: [number, number];
  blendType: IBlendType;
}

export interface IHexLayerConfig {
  hexId?: string | null;
  fillColor: ILayerSingleColor | ILayerFieldColor;
  blendType: IBlendType;
}
export interface IPointLayer extends IBaseLayer {
  type: 'point';
  config: IPointLayerConfig;
}

export interface ILineLayer extends IBaseLayer {
  type: 'line';
  config: ILineLayerConfig;
}

export interface IPolygonLayer extends IBaseLayer {
  type: 'polygon';
  config: IPolygonLayerConfig;
}

export interface ITripLayer extends IBaseLayer {
  type: 'trip';
  config: ITripLayerConfig;
}

export interface IHexLayer extends IBaseLayer {
  type: 'hex';
  config: IHexLayerConfig;
}

export interface IHeatLayer extends IBaseLayer {
  type: 'heat';
  config: IHeatLayerConfig;
}

export type ILayer =
  | IPointLayer
  | ILineLayer
  | IPolygonLayer
  | ITripLayer
  | IHexLayer
  | IHeatLayer;
