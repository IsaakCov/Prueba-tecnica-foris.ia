¡Hola!, me alegra mucho que estén leyendo este documento porque quiere decir que recibieron mi código. En este detallaré, según lo solicitado, el razonamiento detrás de las decisiones tomadas en el desarrollo del problema. Espero la extensión no sea un problema, intenté que no faltara nada.

Detalles a tener en cuenta antes de empezar a hacer el código:
Esta sección la utilizaré para dar explicación de algunas cosas que se verán más adelante y que creo firmemente que son importantes antes de hacer código con tal de hacer el trabajo más sencillo en caso de abrirse a modificaciones más adelante.
El primer paso siempre será tomar los requerimientos de lo que se quiere hacer, a partir de ahí lo vamos desglosando en tareas independientes una de otra, cada tarea pensada en que sea autónoma (responsabilidad única), esto con varios beneficios a la hora de la legibilidad, depuración, pruebas, etcétera. En cuanto al modelado de los datos y la información que desprendemos de esta, dado que escogí JavaScript como el lenguaje en el que más experiencia tengo, decidí optar por ocupar el formato JSON, que mantiene una estructura de objetos/diccionarios, esto pensando en la escalabilidad del proyecto ya que nos permite una fácil manipulación así como una correcta mantención y una fácil integración más adelante en caso de querer migrar la información a una base de datos (mantenible y escalable). No sólo eso, sino que este formato nos permite poder crear más funcionalidades, como fue el caso del cálculo de los tiempos de cada estudiante, anexo a ello sin la necesidad de cambiar ninguna de sus cualidades iniciales ni creando subclases (principio Open/closed).

La arquitectura de las carpetas se hace pensando de una manera general en incorporar el patrón MVC, por lo que se mantiene bastante genérico pero sostenido en tres pilares:

- "models", donde irá el código para representar los datos de los estudiantes.
- "utils", donde irán la mayoría de tareas comunes para cada uno de los datos del punto anterior.
- "tests", como su nombre indica, es el probar que los componentes del proyecto estén funcionando correctamente. En esta ocasión me apoyaré con Jest.

Nota: Decidí ocupar varios ítems en inglés dado que los datos en los que están los ejemplos del problema están en inglés. En otra empresa me criticaron el uso de “Spanglish” por usar variables en inglés y comentarios en español, espero que no me reste puntos dado que yo sólo busco que se adapte al entendimiento de todos. Para que el código sea legible intento que las variables sean descriptivas y acorde al contexto en el que se usan. 

Sé que el spanglish está mal, pero hago la suposición de que el que leerá mi código lo hará en español, pero si el manejo de los archivos en el código estará en inglés, estimo pertinente para que tenga sentido y sea más legible el uso de variables en inglés. Podría hacerlo completamente en español o completamente en inglés según se requiera, soy flexible con ello.

Una vez teniendo en claro estos detalles, podemos empezar a desglosar los pasos de manera general para empezar, entendemos que hay que generar a grandes rasgos:

1. Una lectura para un archivo.
2. Crear una función encargada de desprender todos los datos.
3. Crear un registro de estudiantes.
4. Verificar la función a ejecutar dependiendo si se quiere registrar a un estudiante o registrar una asistencia de un estudiante ya existente mediante un código en la lectura.
5. Leer los datos y crear una función para agregar a los estudiantes al sistema o modificar sus datos en el sistema.
6. Crear un reporte del tiempo en minutos y la cantidad de días que asistieron los alumnos en los que se ordena según mayor cantidad de minutos asistidos.
7. Testing de los componentes.

Una vez delimitados los pasos, nos ponemos manos a la obra con el código.

Teniendo en cuenta que ocupé una arquitectura MVC adaptada, decidí empezar con un index.js que sería el que ocuparía para manipular todas las demás funciones que crearía. 

Para el primer paso decidí crear una función que se encargue de procesar el archivo recibido por consola y simplemente separarlo en un array donde cada línea sería un elemento, esto para un mejor orden más adelante. Añadí respectivamente un manejo de error por si no encontraba nada.

Con el segundo paso decidí hacer una función que se encargara de leer cada línea, siendo estas toda una instrucción completa, y asignar la información a un objeto para poder ocuparla más adelante.

Para el registro de los estudiantes, pensando en que más adelante podríamos querer exportar esta, decidí que ocuparía una lista de objetos (donde cada objeto sería un estudiante), la cual luego sería fácil de aplicar el método JSON.stringify() para transformarla en un JSON y exportarla a una base de datos.

Para el cuarto paso, decidí someter la instrucción a una validación estricta en getInputData por si tuviera algún problema al leer la información de la línea, lo que facilitaría la corrección de problemas más adelante.

Continuando con el quinto paso, después de leer el comando, creé las funciones para añadir a los estudiantes al registro y para poder registrar sus asistencias (createStudentRecord y registerAttendance respectivamente). Decidí que lo más sencillo sería crear una clase estudiante con toda la información que podía rescatar de las líneas proporcionadas, además de añadir los métodos para actualizar sus parámetros de días asistidos además minutos presente, después ocupar este constructor y añadir esa instancia a la lista de registro. Con la segunda simplemente me encargué de actualizar los datos, sin embargo para esto tuve que aplicar unas pequeñas funciones para cambiar el formato y el cálculo de los minutos, además de la verificación de que el tiempo asistido sea mayor a 5 minutos para validar la asistencia.

El sexto paso fue el que más tiempo me llevó por averiguar la mejor manera de ordenar por minutos, hasta que al buscar formas de refactorizar vi que JavaScript tiene un método nativo para ordenar, así que lo apliqué con el parámetro de minutos presente descendente. Luego simplemente recorrí la lista ordenada y entregué el resultado en el formato solicitado. Esa lista también estará fácilmente disponible para reordenarla y almacenarla en la misma función.

Para el séptimo paso opté por usar la librería Jest y testear las funciones más importantes, que son las asociadas al estudiante; como crearlo, poder modificarlo y añadirlo correctamente al registro, además de las de la creación del reporte, el cual es nuestro resultado y verificador de que es funcional.

Este fue el análisis del procedimiento general, ojalá sea suficiente y no haya omitido algo de relevancia. Intenté ser lo más pulcro porque foris me interesa mucho, tras la entrevista quedé muy entusiasmado y estaría contento de poder seguir en el proceso y trabajar con ustedes. 

¡Muchas gracias por su tiempo y atención!

Isaac Covarrubias.