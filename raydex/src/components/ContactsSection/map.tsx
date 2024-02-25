import { useEffect, useRef } from 'react';

const MapWidget = () => {
  const id = 'map-widget';
  const txt =
    '<a class="dg-widget-link" href="http://2gis.kz/almaty/firm/70000001077175705/center/76.9260334968567,43.24748471424524/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap">Посмотреть на карте Алматы</a><div class="dg-widget-link"><a href="http://2gis.kz/almaty/center/76.926032,43.246414/zoom/16/routeTab/rsType/bus/to/76.926032,43.246414╎Рэйдекс, компания?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route">Найти проезд до Рэйдекс, компания</a></div><script charset="utf-8" src="https://widgets.2gis.com/js/DGWidgetLoader.js"></script><script charset="utf-8">new DGWidgetLoader({"width":"100%","height":400,"borderColor":"#a3a3a3","pos":{"lat":43.24748471424524,"lon":76.9260334968567,"zoom":16},"opt":{"city":"almaty"},"org":[{"id":"70000001077175705"}]});</script><noscript style="color:#c00;font-size:16px;font-weight:bold;">Виджет карты использует JavaScript. Включите его в настройках вашего браузера.</noscript>';

  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentWindow?.document;
      doc && doc.open();
      doc && doc.write(txt);
      doc && doc.close();
    }
  }, [txt]);

  return <iframe ref={iframeRef} id={id} title="2GIS Map Widget" />;
};

export default MapWidget;
