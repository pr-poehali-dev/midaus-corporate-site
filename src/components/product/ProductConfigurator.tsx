import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const pressureRanges = {
  'ДИ': ['0.1', '0.16', '0.25', '0.4', '0.6', '1', '1.6', '2.5', '4', '6', '10', '16', '25', '40', '60', '100', '160'],
  'ДА': ['0.1', '0.16', '0.25', '0.4', '0.6', '1', '1.6', '2.5', '4', '6', '10'],
  'ДВ': ['0.004', '0.006', '0.01', '0.016', '0.025', '0.04', '0.06', '0.1'],
  'ДИВ': ['0.002', '0.004', '0.006', '0.01', '0.016', '0.025', '0.04', '0.06', '0.1', '0.16', '0.25', '0.4', '0.6', '1', '1.6', '2.4'],
};

const lowerPressureRanges = {
  'ДА': ['0', '0.01', '0.016', '0.025', '0.04', '0.06', '0.08'],
  'ДИВ': ['0.002', '0.004', '0.006', '0.01', '0.016', '0.025', '0.04', '0.06', '0.1'],
};

interface ConfiguratorConfig {
  pressureType: string;
  unit: string;
  upperLimit: string;
  upperLimitCustom: string;
  lowerLimit: string;
  lowerLimitCustom: string;
  accuracy: string;
  outputSignal: string;
  mechanicalConnection: string;
  electricalConnection: string;
  explosionProtection: string;
  membraneMaterial: string;
}

interface ProductConfiguratorProps {
  config: ConfiguratorConfig;
  setConfig: React.Dispatch<React.SetStateAction<ConfiguratorConfig>>;
  showUpperCustomInput: boolean;
  setShowUpperCustomInput: (value: boolean) => void;
  showLowerCustomInput: boolean;
  setShowLowerCustomInput: (value: boolean) => void;
  getOrderCode: () => string;
  setShowPriceModal: (value: boolean) => void;
}

export default function ProductConfigurator({
  config,
  setConfig,
  showUpperCustomInput,
  setShowUpperCustomInput,
  showLowerCustomInput,
  setShowLowerCustomInput,
  getOrderCode,
  setShowPriceModal,
}: ProductConfiguratorProps) {
  const showLowerLimitField = config.pressureType && config.pressureType !== 'ДВ';

  const isUnitEnabled = config.pressureType !== '';
  const isUpperLimitEnabled = isUnitEnabled && config.unit !== '';
  const isLowerLimitEnabled = isUpperLimitEnabled && (config.upperLimit !== '' || config.upperLimitCustom !== '');
  const isAccuracyEnabled = showLowerLimitField 
    ? (isLowerLimitEnabled && (config.lowerLimit !== '' || config.lowerLimitCustom !== ''))
    : isUpperLimitEnabled && (config.upperLimit !== '' || config.upperLimitCustom !== '');
  const isOutputSignalEnabled = isAccuracyEnabled && config.accuracy !== '';
  const isMechanicalConnectionEnabled = isOutputSignalEnabled && config.outputSignal !== '';
  const isExplosionProtectionEnabled = isMechanicalConnectionEnabled && config.mechanicalConnection !== '';
  const isElectricalConnectionEnabled = isExplosionProtectionEnabled && config.explosionProtection !== '';
  const isMembraneMaterialEnabled = isElectricalConnectionEnabled && config.electricalConnection !== '';

  return (
    <div>
      <div className="bg-secondary p-6 rounded-lg mb-6">
        <h3 className="font-heading font-semibold text-lg mb-4">Конфигуратор заказа</h3>
        
        <div className="space-y-4 mb-6">
          <div className="space-y-2">
            <Label htmlFor="pressureType">Тип давления</Label>
            <Select value={config.pressureType} onValueChange={(value) => setConfig({...config, pressureType: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите тип давления" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ДИ">Избыточное (ДИ)</SelectItem>
                <SelectItem value="ДА">Абсолютное (ДА)</SelectItem>
                <SelectItem value="ДВ">Давление-разрежение (ДВ)</SelectItem>
                <SelectItem value="ДИВ">Избыточное давление-разрежение (ДИВ)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="unit" className={!isUnitEnabled ? 'text-muted-foreground' : ''}>Единица измерения</Label>
            <Select value={config.unit} onValueChange={(value) => setConfig({...config, unit: value})} disabled={!isUnitEnabled}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите единицу измерения" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="МПа">МПа</SelectItem>
                <SelectItem value="кПа">кПа</SelectItem>
                <SelectItem value="бар">бар</SelectItem>
                <SelectItem value="кгс/см²">кгс/см²</SelectItem>
                <SelectItem value="psi">psi</SelectItem>
                <SelectItem value="мм рт. ст.">мм рт. ст.</SelectItem>
                <SelectItem value="м вод. ст.">м вод. ст.</SelectItem>
                <SelectItem value="другая">другая</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {config.pressureType && (
            <div className="space-y-2">
              <Label htmlFor="upperLimit" className={!isUpperLimitEnabled ? 'text-muted-foreground' : ''}>
                Верхний предел измерения давления
                {config.pressureType === 'ДИ' && ' (до 160 МПа)'}
                {config.pressureType === 'ДА' && ' (до 10 МПа)'}
                {config.pressureType === 'ДВ' && ' (от 0.004 до 0.1 МПа)'}
                {config.pressureType === 'ДИВ' && ' (от 0.002 до 2.4 МПа)'}
              </Label>
              {!showUpperCustomInput ? (
                <Select value={config.upperLimit} onValueChange={(value) => {
                  if (value === 'custom') {
                    setShowUpperCustomInput(true);
                    setConfig({...config, upperLimit: ''});
                  } else {
                    setConfig({...config, upperLimit: value});
                  }
                }} disabled={!isUpperLimitEnabled}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите из стандартного ряда" />
                  </SelectTrigger>
                  <SelectContent>
                    {pressureRanges[config.pressureType as keyof typeof pressureRanges]?.map((value) => (
                      <SelectItem key={value} value={value}>
                        {config.pressureType === 'ДВ' ? `-${value}` : value} МПа
                      </SelectItem>
                    ))}
                    <SelectItem value="custom">Другой (ввести вручную)</SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Введите значение"
                    value={config.upperLimitCustom}
                    onChange={(e) => setConfig({...config, upperLimitCustom: e.target.value})}
                    disabled={!isUpperLimitEnabled}
                  />
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowUpperCustomInput(false);
                      setConfig({...config, upperLimitCustom: ''});
                    }}
                  >
                    Отмена
                  </Button>
                </div>
              )}
            </div>
          )}

          {showLowerLimitField && (
            <div className="space-y-2">
              <Label htmlFor="lowerLimit" className={!isLowerLimitEnabled ? 'text-muted-foreground' : ''}>
                Нижний предел измерения давления
                {config.pressureType === 'ДА' && ' (от 0 до 0.08 МПа)'}
                {config.pressureType === 'ДИВ' && ' (от -0.002 до -0.1 МПа)'}
              </Label>
              {config.pressureType === 'ДИ' ? (
                <Input
                  type="text"
                  placeholder="Введите значение"
                  value={config.lowerLimitCustom}
                  onChange={(e) => setConfig({...config, lowerLimitCustom: e.target.value})}
                  disabled={!isLowerLimitEnabled}
                />
              ) : !showLowerCustomInput ? (
                <Select value={config.lowerLimit} onValueChange={(value) => {
                  if (value === 'custom') {
                    setShowLowerCustomInput(true);
                    setConfig({...config, lowerLimit: ''});
                  } else {
                    setConfig({...config, lowerLimit: value});
                  }
                }} disabled={!isLowerLimitEnabled}>
                  <SelectTrigger>
                    <SelectValue placeholder="Выберите из стандартного ряда" />
                  </SelectTrigger>
                  <SelectContent>
                    {lowerPressureRanges[config.pressureType as keyof typeof lowerPressureRanges]?.map((value) => (
                      <SelectItem key={value} value={value}>
                        {config.pressureType === 'ДИВ' ? `-${value}` : value} МПа
                      </SelectItem>
                    ))}
                    <SelectItem value="custom">Другой (ввести вручную)</SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Введите значение"
                    value={config.lowerLimitCustom}
                    onChange={(e) => setConfig({...config, lowerLimitCustom: e.target.value})}
                    disabled={!isLowerLimitEnabled}
                  />
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowLowerCustomInput(false);
                      setConfig({...config, lowerLimitCustom: ''});
                    }}
                    disabled={!isLowerLimitEnabled}
                  >
                    Отмена
                  </Button>
                </div>
              )}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="accuracy" className={!isAccuracyEnabled ? 'text-muted-foreground' : ''}>Основная приведенная погрешность, % от диапазона измерения</Label>
            <Select value={config.accuracy} onValueChange={(value) => setConfig({...config, accuracy: value})} disabled={!isAccuracyEnabled}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите точность" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="±0.15%">±0.15%</SelectItem>
                <SelectItem value="±0.2%">±0.2%</SelectItem>
                <SelectItem value="±0.25%">±0.25%</SelectItem>
                <SelectItem value="±0.5%">±0.5%</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="outputSignal" className={!isOutputSignalEnabled ? 'text-muted-foreground' : ''}>Выходной сигнал</Label>
            <Select value={config.outputSignal} onValueChange={(value) => setConfig({...config, outputSignal: value})} disabled={!isOutputSignalEnabled}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите выходной сигнал" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="4…20 мА / 2-х пров.">4…20 мА / 2-х пров. (Код 01)</SelectItem>
                <SelectItem value="0…5 мА / 3-х пров.">0…5 мА / 3-х пров. (Код 02)</SelectItem>
                <SelectItem value="0…5 мА / 4-х пров.">0…5 мА / 4-х пров. (Код 04)</SelectItem>
                <SelectItem value="0.4…2 В / 3-х пров.">0.4…2 В / 3-х пров. (Код 05/1)</SelectItem>
                <SelectItem value="0.5…4.5 В / 3-х пров.">0.5…4.5 В / 3-х пров. (Код 05/2)</SelectItem>
                <SelectItem value="0…5 В / 4-х пров.">0…5 В / 4-х пров. (Код 03)</SelectItem>
                <SelectItem value="0…10 В / 3-х пров.">0…10 В / 3-х пров. (Код 05/4)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mechanicalConnection" className={!isMechanicalConnectionEnabled ? 'text-muted-foreground' : ''}>Механическое присоединение</Label>
            <Select value={config.mechanicalConnection} onValueChange={(value) => setConfig({...config, mechanicalConnection: value})} disabled={!isMechanicalConnectionEnabled}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите тип присоединения" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="М20х1.5 ГОСТ 2405">М20х1.5 ГОСТ 2405</SelectItem>
                <SelectItem value="М20х1.5 DIN 3852">М20х1.5 DIN 3852</SelectItem>
                <SelectItem value="М20х1.5 открытая мембрана">М20х1.5 открытая мембрана</SelectItem>
                <SelectItem value="М14х1.5 ГОСТ 2405">М14х1.5 ГОСТ 2405</SelectItem>
                <SelectItem value="М14х1.5 DIN 3852">М14х1.5 DIN 3852</SelectItem>
                <SelectItem value="М14х1.5 открытая мембрана">М14х1.5 открытая мембрана</SelectItem>
                <SelectItem value="М12х1.5 ГОСТ 2405">М12х1.5 ГОСТ 2405</SelectItem>
                <SelectItem value="М12х1">М12х1</SelectItem>
                <SelectItem value='G3/4" EN 837'>G3/4" EN 837</SelectItem>
                <SelectItem value='G3/4" DIN 3852'>G3/4" DIN 3852</SelectItem>
                <SelectItem value='G3/4" открытая мембрана'>G3/4" открытая мембрана</SelectItem>
                <SelectItem value='G1/2" EN 837'>G1/2" EN 837</SelectItem>
                <SelectItem value='G1/2" DIN 3852'>G1/2" DIN 3852</SelectItem>
                <SelectItem value='G1/2" открытая мембрана'>G1/2" открытая мембрана</SelectItem>
                <SelectItem value='G1/4" EN 837'>G1/4" EN 837</SelectItem>
                <SelectItem value='G1/4" DIN 3852'>G1/4" DIN 3852</SelectItem>
                <SelectItem value='G1/4" открытая мембрана'>G1/4" открытая мембрана</SelectItem>
                <SelectItem value='1/2" NPT'>1/2" NPT</SelectItem>
                <SelectItem value='1/4" NPT'>1/4" NPT</SelectItem>
                <SelectItem value="другое">другое</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="explosionProtection" className={!isExplosionProtectionEnabled ? 'text-muted-foreground' : ''}>Вид взрывозащиты</Label>
            <Select value={config.explosionProtection} onValueChange={(value) => setConfig({...config, explosionProtection: value})} disabled={!isExplosionProtectionEnabled}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите вид взрывозащиты" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Без взрывозащиты">Без взрывозащиты</SelectItem>
                <SelectItem value="Искробезопасная цепь (Іа)">Искробезопасная цепь (Іа)</SelectItem>
                <SelectItem value="Взрывонепроницаемая оболочка (Вн)">Взрывонепроницаемая оболочка (Вн)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="electricalConnection" className={!isElectricalConnectionEnabled ? 'text-muted-foreground' : ''}>Электрическое присоединение</Label>
            <Select value={config.electricalConnection} onValueChange={(value) => setConfig({...config, electricalConnection: value})} disabled={!isElectricalConnectionEnabled}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите тип присоединения" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="DIN 43650А (код G)">DIN 43650А (код G)</SelectItem>
                <SelectItem value="Кабельный ввод прямой пластиковый (код ПП)">Кабельный ввод (прямой пластиковый) код ПП</SelectItem>
                <SelectItem value="Кабельный ввод прямой металлический (код ПМ)">Кабельный ввод (прямой металлический) код ПМ</SelectItem>
                <SelectItem value="Кабельный ввод угловой пластиковый (код УП)">Кабельный ввод (угловой пластиковый) код УП</SelectItem>
                <SelectItem value="Кабельный ввод угловой металлический (код УМ)">Кабельный ввод (угловой металлический) код УМ</SelectItem>
                <SelectItem value="Кабельный ввод прямой под металлорукав (код ПММ)">Кабельный ввод (прямой под металлорукав) код ПММ</SelectItem>
                <SelectItem value="Кабельный ввод угловой под металлорукав (код УММ)">Кабельный ввод (угловой под металлорукав) код УММ</SelectItem>
                <SelectItem value="Кабельный ввод прямой под металлопластиковый рукав (код УММ-15)">Кабельный ввод (прямой под металлопластиковый рукав) код УММ-15</SelectItem>
                <SelectItem value="Кабельный ввод примой металлический с усиленным корпусом (код ПМ1)">Кабельный ввод (примой металлический с усиленным корпусом) код ПМ1</SelectItem>
                <SelectItem value="Кабельный ввод прямой под бронекабель (код ПБ)">Кабельный ввод (прямой под бронекабель) код ПБ</SelectItem>
                <SelectItem value="Кабельный ввод угловой под бронекабель (код УБ)">Кабельный ввод (угловой под бронекабель) код УБ</SelectItem>
                <SelectItem value="Кабельный ввод угловой трубный (код УТ)">Кабельный ввод (угловой трубный) код УТ</SelectItem>
                <SelectItem value="Кабельный ввод прямой трубный (код ПТ)">Кабельный ввод (прямой трубный) код ПТ</SelectItem>
                <SelectItem value="Разъем РСГ4ТВ (код ПР)">Разъем РСГ4ТВ код ПР</SelectItem>
                <SelectItem value="Разъем РСГ7ТВ (код Р)">Разъем РСГ7ТВ код Р</SelectItem>
                <SelectItem value="Разъем 2РМТ22 (код УР2)">Разъем 2РМТ22 код УР2</SelectItem>
                <SelectItem value="Разъем 2РМТ14 (код УР3)">Разъем 2РМТ14 код УР3</SelectItem>
                <SelectItem value="Разъем 2РМГ14 (код УР4)">Разъем 2РМГ14 код УР4</SelectItem>
                <SelectItem value="Разъем 2РМГ22 (код УР5)">Разъем 2РМГ22 код УР5</SelectItem>
                <SelectItem value="другое">другое</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="membraneMaterial" className={!isMembraneMaterialEnabled ? 'text-muted-foreground' : ''}>Материал мембраны</Label>
            <Select value={config.membraneMaterial} onValueChange={(value) => setConfig({...config, membraneMaterial: value})} disabled={!isMembraneMaterialEnabled}>
              <SelectTrigger>
                <SelectValue placeholder="Выберите материал" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="12Х18Н10Т">Нержавеющая сталь 12Х18Н10Т</SelectItem>
                <SelectItem value="Титан">Титан</SelectItem>
                <SelectItem value="Хастеллой">Хастеллой</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {config.pressureType && (
          <div className="p-4 bg-white rounded-lg border border-primary/20">
            <p className="text-sm text-muted-foreground mb-1">Код заказа:</p>
            <p className="font-mono font-semibold text-lg">{getOrderCode()}</p>
          </div>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <Button className="flex-1" size="lg" onClick={() => setShowPriceModal(true)}>
          <Icon name="DollarSign" size={20} className="mr-2" />
          Запросить цену
        </Button>
        <Button variant="outline" size="lg">
          <Icon name="MessageSquare" size={20} className="mr-2" />
          Получить консультацию
        </Button>
      </div>
    </div>
  );
}
