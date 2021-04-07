import { ISchema } from './i-schema';

export interface IParameter {
  /**
   * REQUIRED. The name of the parameter. Parameter names are case sensitive.
   * -- If in is "nodePath", the name field MUST correspond to a template expression occurring within
   *    the nodePath field in the Paths Object. See Path Templating for further information.
   * -- If in is "header" and the name field is "Accept", "Content-Type" or "Authorization",
   *    the parameter definition SHALL be ignored.
   * -- For all other cases, the name corresponds to the parameter name used by the in property.
   */
  name: string;

  /**
   * REQUIRED. The location of the parameter.
   * Possible values are "query", "header", "nodePath" or "cookie".
   */
  in: 'query' | 'header' | 'path' | 'cookie';

  /**
   * A brief description of the parameter. This could contain examples of use.
   * CommonMark syntax MAY be used for rich text representation.
   */
  description?: string;

  /**
   * Determines whether this parameter is mandatory. If the parameter location is "nodePath", this property
   * is REQUIRED and its value MUST be true. Otherwise, the property MAY be included and its
   * default value is false.
   */
  required?: boolean;

  /**
   * Specifies that a parameter is deprecated and SHOULD be transitioned out of usage.
   * Default value is false.
   */
  deprecated?: boolean;

  /**
   * Sets the ability to pass empty-valued parameters. This is valid only for query parameters and
   * allows sending a parameter with an empty value. Default value is false. If style is used,
   * and if behavior is n/a (cannot be serialized), the value of allowEmptyValue SHALL be ignored.
   * Use of this property is NOT RECOMMENDED, as it is likely to be removed in a later revision.
   */
  allowEmptyValue?: boolean;

  /**
   * not in docu !!!!!!
   */
  schema: ISchema;
}
